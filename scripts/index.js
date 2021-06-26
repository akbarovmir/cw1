const cardContainer = document.getElementById('cardContainer');

const Card = (data) => {
  const card = document.createElement('div');
  card.classList.add('card')
  card.textContent = data.question;
  return card;
};

window.onload = () => {
  db.forEach((cardData) => {
    cardContainer.appendChild(Card(cardData));
  });
};
