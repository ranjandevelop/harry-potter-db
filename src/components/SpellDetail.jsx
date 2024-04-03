import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SpellDetail = () => {
  const [spell, setSpell] = useState([]);
  const url = useLocation().pathname;
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setSpell(response.data.attributes));
  }, [url]);
  console.log(spell);
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure>
          <img src={spell.image} alt="" className="rounded" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-xl">{spell.name}</h1>
          <hr />

          <span>
            <b>CATEGORY: </b>
            {spell.category}
          </span>
          <span>
            <b>EFFECT: </b>
            {spell.effect}
          </span>
          <span>
            <b>lIGHT: </b>
            {spell.light}
          </span>
          <span>
            <b>INCANTATION: </b>
            {spell.incatation}
          </span>
          <span>
            <b>HAND: </b>
            {spell.hand}
          </span>
          <a href={spell.wiki} className="underline text-blue-700">
            Potter Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpellDetail;
