import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "https://rickandmortyapi.com/api";
    const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
      setCharacter(response.data)
    );
  }, [detailId]);

  return (
    <Layout>
      <div>
        {character.name ? (
          <>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <h2>{character.species}</h2>
            <img src={character.image} alt="img" />
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </Layout>
  );
}

export default Detail;
