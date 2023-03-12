import a from "./SearchBar.module.css";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { ImSearch } from "react-icons/im";

export default function SearchBar(props) {
  //const navigate = useNavigate();
  const { onSearch } = props;
  const [character, setCharacter] = useState("");
  const handleChange = (e) => setCharacter(e.target.value);

  return (
    <div className={a.container}>
      <input
        className={a.input}
        type="search"
        value={character}
        placeholder='Search by ID'
        onChange={handleChange}
      />
      {/*<span className={a.passChild}>{<ImSearch/>}</span> */}
      <button className={a.button} onClick={() => onSearch(character)}>
        Agregar
      </button>
      {/* 
      <button
        className={a.button}
        onClick={() => onSearch(Math.floor(Math.random() * 826))}
      >
        Random
      </button>
      */}
      <button className={a.button}  onClick={() => window.location.reload()}>
        Logout
      </button>
    </div>
  );
}
