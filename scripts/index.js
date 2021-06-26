const cardContainer = document.getElementById('cardContainer');

const Card = (data) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const p = document.createElement('p');
  p.textContent = data.question;

  const button = document.createElement('button');
  button.textContent = 'Answer';
  button.onclick = () => {
    window.location.href = `/question.html?id=${data.id}`;
  };

  card.appendChild(p);
  card.appendChild(button);

  return card;
};

window.onload = () => {
  if (!localStorage.getItem('questions')) {
    localStorage.setItem('questions', JSON.stringify(db))
  }
  
  let question = JSON.parse(localStorage.getItem('questions'))
  
  question.forEach((cardData) => {
    cardContainer.appendChild(Card(cardData));
  });
};
