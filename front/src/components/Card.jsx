import React from "react";
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";
import { useState } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id)
    }else{
      setIsFav(false)
      addFavorite()
    }
  };
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    onFavoriteToggle,
    isFavorite,
    addFavorite,
    removeFavorite,
  } = props;

  const handleCardClose = () => {
    onClose(id);
  };

  const handleFavoriteToggle = () => {
    onFavoriteToggle({ id, name, status, species, gender, origin, image });
  };

  return (
    <div className={`${styles.card} ${isFavorite ? styles.favorite : ""}`}>
      <button className={styles.closeButton} onClick={handleCardClose}>
        X
      </button>
      <div className={styles.favoriteButton} onClick={handleFavoriteToggle}>
        {isFavorite ? <FaStar color="gold" /> : <FaStar color="gray" />}
      </div>
      <a href={`/detail/${id}`}>
        <p>Name: {name}</p>
      </a>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin.name}</p>
      <div className={styles.imageContainer}>
        <img src={image} alt="" className={styles.image} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(Card);
