import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PotionDetail = () => {
  const [potion, setPotion] = useState([]);
  const url = useLocation().pathname;
  console.log(url);
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setPotion(response.data.attributes));
    console.log(potion);
  }, [url]);
  return (
    <>
      <div key={potion.slug} className="flex justify-center">
        <div className="card w-96 md:bg-base-100 md:shadow-xl m-5">
          <figure>
            <img src={potion.image} alt="" className="rounded" />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-xl">{potion.name}</h1>
            <hr />

            <span>
              <b>Difficulty: </b>
              {potion.difficulty}
            </span>
            <span>
              <b>Ingredients: </b>
              {potion.ingredients}
            </span>
            <span>
              <b>Characteristics: </b>
              {potion.characteristics}
            </span>
            <span>
              <b>Effect: </b>
              {potion.effect}
            </span>
            <span>
              <b>Inventors: </b>
              {potion.inventors}
            </span>
            <a href={potion.wiki} className="underline text-blue-700">
              Potter Wiki
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PotionDetail;
