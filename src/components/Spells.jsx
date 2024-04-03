import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const url = useLocation().pathname;
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setSpells(response.data));
  }, [url]);
  const handleOnChange = (e) => {
    let query = e.target.value;
    setSearch(query);
    console.log("query", query);
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
        {spells.length > 0 ? (
          spells
            .filter((item) => {
              return search === ""
                ? item
                : item.attributes.slug.includes(search);
            })
            .map((spell) => (
              <Link key={spell.id} to={`/spells/${spell.attributes.slug}`}>
                <Card
                  key={spell.id}
                  name={spell.attributes.name}
                  cover={spell.attributes.image}
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
      </div>
    </>
  );
};

export default Spells;
