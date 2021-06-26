const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const questionInput = document.getElementById('question');

const genereteUID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

form.onsubmit = (e) => {
  e.preventDefault();

  if (nameInput.value.trim() == '' || questionInput.value.trim() == '') {
    alert('Wrong input');
    return;
  }

  if (!localStorage.getItem('questions')) {
    localStorage.setItem('questions', JSON.stringify(db));
  }

  let questions = JSON.parse(localStorage.getItem('questions'));
  const newQuestion = {
    id: genereteUID(),
    name: e.target.name.value,
    question: e.target.question.value,
    answers: [],
  };

  questions.push(newQuestion);

  localStorage.setItem('questions', JSON.stringify(questions));
  alert('Successfully posted!');
  window.location.reload();
};
