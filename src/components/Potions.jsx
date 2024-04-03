import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";

const Potions = () => {
  const [potions, setPotions] = useState([]);
  const url = useLocation().pathname;
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setPotions(response.data));
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
      <div className="grid md:grid-cols-4 place-items-center gap-10 m-10">
        {potions.length > 0 ? (
          potions
            .filter((item) =>
              search === "" ? item : item.attributes.slug.includes(search)
            )
            .map((potion) => (
              <Link key={potion.id} to={`/potions/${potion.attributes.slug}`}>
                <Card
                  key={potion.id}
                  name={potion.attributes.name}
                  cover={potion.attributes.image}
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

export default Potions;
