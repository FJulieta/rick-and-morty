import React, { useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

import styles from "./Home.module.css";

function Home() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters);
  };

  const onSearch = (id) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const isDuplicate = characters.some(
            (character) => character.id === data.id
          );
          if (!isDuplicate) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡Este personaje ya está en la lista!");
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Ocurrió un error al buscar el personaje.");
      });
  };

  const onAddRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId.toString());
  };

  const hasResults = characters && characters.length > 0 

  return (
    <Layout showSearch={hasResults} onSearch={onSearch} onAddRandomCharacter={onAddRandomCharacter}>
      {hasResults ?
        <Cards characters={characters} onClose={onClose} />
        :
        <div className={styles.emptyState}>
            <h2>Bienvenido al universo de Rick y Morty!</h2>
            <p>Ingresa un número de busqueda</p>
            <SearchBar onSearch={onSearch}></SearchBar>
        </div>
      }

    </Layout>
  );
}

export default Home;
