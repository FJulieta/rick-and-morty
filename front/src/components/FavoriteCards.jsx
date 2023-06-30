import React, { useState } from "react";
import Card from "./Card";


export default function FavoriteCards() {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const handleCardClose = (id) => {
    const updatedFavoriteCards = favoriteCards.filter((card) => card.id !== id);
    setFavoriteCards(updatedFavoriteCards);
  };

  const handleFavoriteToggle = (card) => {
    const isFavorite = favoriteCards.some((c) => c.id === card.id);

    if (isFavorite) {
      const updatedFavoriteCards = favoriteCards.filter((c) => c.id !== card.id);
      setFavoriteCards(updatedFavoriteCards);
    } else {
      setFavoriteCards([...favoriteCards, card]);
    }
  };

  return (
    <div>
      <h1>Favorite Cards</h1>
      {favoriteCards.map((card) => (
       <Card
       key={card.id}
       id={card.id}
       name={card.name}
       status={card.status}
       species={card.species}
       gender={card.gender}
       origin={card.origin}
       image={card.image}
       onClose={handleCardClose}
       onFavoriteToggle={handleFavoriteToggle}
       isFavorite={favoriteCards.some((c) => c.id === card.id)}
     />
      ))}
    </div>
  );
}
