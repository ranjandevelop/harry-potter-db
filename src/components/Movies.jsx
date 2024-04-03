import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const url = useLocation().pathname;
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setMoviesData(response.data));
  }, [url]);
  return (
    <>
      <div className="grid md:grid-cols-4 p-10 gap-10">
        {moviesData.length > 0 ? (
          moviesData.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.attributes.slug}`}>
              <Card
                key={movie.id}
                name={movie.attributes.title}
                cover={movie.attributes.poster}
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
export default Movies;
