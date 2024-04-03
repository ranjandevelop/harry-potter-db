import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";

const Characters = () => {
  const [chractersData, setChractersData] = useState([]);
  const url = useLocation().pathname;
  const [next, setNext] = useState(1);
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}/?page[number]=${next}`)
      .then((response) => response.json())
      .then((response) => setChractersData(response.data));
    console.log(typeof chractersData);
  }, [url, next]);
  const nextPage = () => {
    setNext(next + 1);
  };
  const handleOnChange = (e) => {
    const value = e.target.value;
    fetch(`https://api.potterdb.com/v1/${url}/?filter[name_cont]=${value}`)
      .then((response) => response.json())
      .then((response) => setChractersData(response.data));
  };
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 min-w-[200px] m-4">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={handleOnChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="grid md:grid-cols-4 p-10 gap-10 place-items-center">
        {chractersData.length > 0 ? (
          chractersData.map((character) => (
            <Link
              key={character.id}
              to={`/characters/${character.attributes.slug}`}
            >
              <Card
                key={character.id}
                name={character.attributes.name}
                cover={character.attributes.image}
                styles={{
                  width: "200px",
                  height: "100px",
                }}
              />
            </Link>
          ))
        ) : (
          <p>Loading....</p>
        )}
        <button onClick={nextPage} className="btn">
          Next Page
        </button>
      </div>
    </>
  );
};

export default Characters;
