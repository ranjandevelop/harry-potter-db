import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const url = useLocation().pathname;
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setMovie(response.data.attributes));
  }, [url]);
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure>
          <img src={movie.poster} alt="" className="rounded" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-xl">{movie.title}</h1>
          <hr />

          <span>
            <b>Release: </b>
            {movie.release_date}
          </span>
          <span>
            <b>Duration: </b>
            {movie.running_time}
          </span>
          <span>
            <b>Rating: </b>
            {movie.rating}
          </span>
          <span>
            <b>Budget: </b>
            {movie.budget}
          </span>
          <span>
            <b>Box Office Collection: </b>
            {movie.box_office}
          </span>
          <span>
            <b>Directors: </b>
            {movie.directors}
          </span>
          <span>
            <b>Summary: </b>
            {movie.summary}
          </span>
          <a href={movie.wiki} className="underline text-blue-700">
            Potter Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
