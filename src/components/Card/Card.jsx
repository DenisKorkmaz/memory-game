import { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from 'prop-types';


import Image1 from "../../../assets/alien-2-svgrepo-com.svg";
import Image2 from "../../../assets/alien-obduction-svgrepo-com.svg";
import Image3 from "../../../assets/astronaut-dog-svgrepo-com.svg";
import Image4 from "../../../assets/astronaut-svgrepo-com.svg";
import Image5 from "../../../assets/nasa-6-logo-svgrepo-com.svg";
import Image6 from "../../../assets/planet-svgrepo-com.svg";
import Image7 from "../../../assets/space-craft-svgrepo-com 1.svg";
import Image8 from "../../../assets/space-galaxy-svgrepo-com 1.svg";
import Image9 from "../../../assets/space-invader-svgrepo-com.svg";
import Image10 from "../../../assets/space-observatory-svgrepo-com.svg";
import Image11 from "../../../assets/space-rocket-svgrepo-com.svg";
import Image12 from "../../../assets/space-rover-2-svgrepo-com.svg";
import Image13 from "../../../assets/space-satellite-dish-svgrepo-com.svg";
import Image14 from "../../../assets/space-ship-3-svgrepo-com.svg";
import Image15 from "../../../assets/space-shuttle-svgrepo-com.svg";
import Image16 from "../../../assets/space-svgrepo-com (1).svg";
import Image17 from "../../../assets/space-svgrepo-com.svg";
import Image18 from "../../../assets/stars-svgrepo-com.svg";
import cardBack from "../../../assets/Vector.svg";

const CardData = [
  { id: 1, image: Image1 },
  { id: 2, image: Image2 },
  { id: 3, image: Image3 },
  { id: 4, image: Image4 },
  { id: 5, image: Image5 },
  { id: 6, image: Image6 },
  { id: 7, image: Image7 },
  { id: 8, image: Image8 },
  { id: 9, image: Image9 },
  { id: 10, image: Image10 },
  { id: 11, image: Image11 },
  { id: 12, image: Image12 },
  { id: 13, image: Image13 },
  { id: 14, image: Image14 },
  { id: 15, image: Image15 },
  { id: 16, image: Image16 },
  { id: 17, image: Image17 },
  { id: 18, image: Image18 },
];

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
}

export default function CardContainer({ onPairFound }) {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);

  useEffect(() => {
    let doubleCards = CardData.concat(CardData);
    doubleCards = shuffleArray(doubleCards);
    doubleCards = doubleCards.map((card) => ({ ...card, flipped: false }));
    setCards(doubleCards);
  }, []);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const card1 = cards[flippedIndices[0]];
      const card2 = cards[flippedIndices[1]];

      if (card1.id !== card2.id) {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[flippedIndices[0]].flipped = false;
          newCards[flippedIndices[1]].flipped = false;
          setCards(newCards);
          setFlippedIndices([]);
        }, 1500);
      } else {
        onPairFound();
        setFlippedIndices([]);
      }
    }
  }, [flippedIndices, cards, onPairFound]);


  const flipCard = (index) => {
    if (flippedIndices.length === 2) {
      return;
    }

    const newCards = [...cards];
    newCards[index].flipped = !newCards[index].flipped;
    setCards(newCards);

    setFlippedIndices((prev) => [...prev, index]);
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card" onClick={() => flipCard(index)}>
          <Image
            src={card.flipped ? card.image : cardBack}
            alt="card"
            width={50}
            height={50}
          />
        </div>
      ))}
    </div>
  );
}

CardContainer.propTypes = {
  onPairFound: PropTypes.func.isRequired,
};