import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import d from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <>
      <button className={d.button} onClick={() => navigate("/home")}>
        Home
      </button>
      {character ? (
        <div className={d.container}>
          <div>
            <h1>{character.name} </h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
          </div>
          <div>
            <img src={character.image} alt={character.name} className={d.img} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
