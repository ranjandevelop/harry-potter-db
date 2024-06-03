import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  const url = useLocation().pathname;
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setCharacter(response.data.attributes));
  }, []);
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 shadow-xl m-5">
        <figure>
          <img src={character.image} alt="" className="rounded" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-xl">{character.name}</h1>
          <hr />

          <span>
            <b>Alias: </b>
            {character.alias_names}
          </span>
          <span>
            <b>Blood Status: </b>
            {character.blood_status}
          </span>
          <span>
            <b>Born: </b>
            {character.born}
          </span>
          <span>
            <b>Died:</b>
            {character.died}
          </span>
          <span>
            <b>Jobs: </b>
            {character.jobs}
          </span>
          <span>
            <b>Hogwarts House: </b>
            {character.house}
          </span>
          <span>
            <b>Boggart: </b>
            {character.boggart}
          </span>
          <span>
            <b>Animagus: </b>
            {character.animagus}
          </span>
          <span>
            <b>Patronus: </b>
            {character.patronus}
          </span>
          <span>
            <b>Family Members: </b>
            {character.family_members}
          </span>
          <span>
            <b>Romances: </b>
            {character.romances}
          </span>
          <a href={character.wiki} className="underline text-blue-700">
            Potter Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
