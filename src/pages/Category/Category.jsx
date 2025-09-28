import { Link, useLocation } from "react-router-dom";
import { Card } from "../../components/index";
import { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);
  const url = useLocation().pathname;
  const [next, setNext] = useState(1);
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}/?page[number]=${next}`)
      .then((response) => response.json())
      .then((response) => setCategory(response.data));
  }, [url, next]);
  const nextPage = () => {
    setNext(next + 1);
  };
  const handleOnChange = (e) => {
    const value = e.target.value;
    fetch(`https://api.potterdb.com/v1/${url}/?filter[name_cont]=${value}`)
      .then((response) => response.json())
      .then((response) => setCategory(response.data));
  };
  return (
    <>
      {url === ("/movies" || "/books") ? (
        <div></div>
      ) : (
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2 min-w-[200px] m-4">
            <input
              type="text"
              className="p-2 rounded"
              placeholder="Spell the magic word!"
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
        </div>
      )}

      <div className="flex flex-wrap justify-center">
        {category.length > 0 ? (
          category.map((data) => (
            <Link key={data.id} to={`${url}/${data.attributes.slug}`}>
              <Card
                key={data.id}
                name={
                  data.attributes.name
                    ? data.attributes.name
                    : data.attributes.title
                }
                cover={
                  data.attributes.image
                    ? data.attributes.image
                    : data.attributes.cover
                    ? data.attributes.cover
                    : data.attributes.poster
                }
              />
            </Link>
          ))
        ) : (
          <p>Loading....</p>
        )}
        {url === "/characters" ? (
          <button onClick={nextPage} className="btn">
            Next Page
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Category;
