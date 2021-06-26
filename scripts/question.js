const nameField = document.getElementById('name');
const questionField = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const answerForm = document.getElementById('form');

let id;

window.onload = () => {
  id = location.search.split('id=')[1];

  const questions = JSON.parse(localStorage.getItem('questions'));
  const question = questions.filter((question) => question.id == id)[0];
  console.log(question);

  nameField.textContent = question.name;
  questionField.textContent = question.question;

  if (question.answers.length > 0) {
    question.answers.forEach((answer) => {
      answersContainer.appendChild(populateAnswers(answer));
    });
  } else {
    answersContainer.innerHTML = '<h3>No answers</h3>';
  }
};

const populateAnswers = (answer) => {
  const divCard = document.createElement('div');
  divCard.classList.add('card');

  const name = document.createElement('h3');
  name.textContent = answer.owner;

  const answerField = document.createElement('p');
  answerField.textContent = answer.text;

  divCard.appendChild(name);
  divCard.appendChild(answerField);

  return divCard;
};

answerForm.onsubmit = (e) => {
  e.preventDefault();

  const questions = JSON.parse(localStorage.getItem('questions'));
  const index = questions.findIndex((question) => question.id == id);
  console.log(index);

  const newAnswer = {
    owner: e.target.nameInput.value,
    text: e.target.answerInput.value,
  };

  questions[index].answers.push(newAnswer);

  localStorage.setItem('questions', JSON.stringify(questions));

  alert('Sent successfully!');
  location.reload();
};
