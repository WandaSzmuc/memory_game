document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "alpaca",
      img: "images/alpaca.png",
    },
    {
      name: "camel",
      img: "images/camel.png",
    },
    {
      name: "poodle",
      img: "images/poodle.png",
    },
    {
      name: "crab",
      img: "images/crab.png",
    },
    {
      name: "panda",
      img: "images/panda.png",
    },
    {
      name: "turtle",
      img: "images/turtle.png",
    },
    {
      name: "alpaca",
      img: "images/alpaca.png",
    },
    {
      name: "camel",
      img: "images/camel.png",
    },
    {
      name: "poodle",
      img: "images/poodle.png",
    },
    {
      name: "crab",
      img: "images/crab.png",
    },
    {
      name: "panda",
      img: "images/panda.png",
    },
    {
      name: "turtle",
      img: "images/turtle.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/rotate.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/bowl.png");
      cards[optionTwoId].setAttribute("src", "images/bowl.png");
      alert("Ten sam obrazek kliknięty 2 razy!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("Dopasowane!");
      cards[optionOneId].setAttribute("src", "images/bowl.png");
      cards[optionTwoId].setAttribute("src", "images/bowl.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/rotate.png");
      cards[optionTwoId].setAttribute("src", "images/rotate.png");
      alert("Spróbuj ponownie");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Gratulacje, wszystkie sparowane!";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
