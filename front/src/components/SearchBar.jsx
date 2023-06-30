import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSearch = () => {
    if (id) {
      onSearch(parseInt(id));
    } else {
      window.alert("Ingrese un ID válido.");
    }
  };

  return (
    <div className={styles["search-bar"]}>
      <input
        type="text"
        placeholder="Search"
        value={id}
        onChange={handleChange}
      />
<button className={styles["add-button"]}onClick={handleSearch}>A D D</button>
    </div>
  );
}
