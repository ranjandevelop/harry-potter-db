import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BookDetail = () => {
  const [book, setBook] = useState([]);
  const url = useLocation().pathname;
  useEffect(() => {
    fetch(`https://api.potterdb.com/v1/${url}`)
      .then((response) => response.json())
      .then((response) => setBook(response.data.attributes));
  }, [url]);
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure>
          <img src={book.cover} alt="" className="rounded" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-xl">{book.titke}</h1>
          <hr />

          <span>
            <b>Author: </b>
            {book.author}
          </span>
          <span>
            <b>Release Date: </b>
            {book.release_date}
          </span>
          <span>
            <b>Pages: </b>
            {book.pages}
          </span>
          <span>
            <b>Summary: </b>
            {book.summary}
          </span>
          <a href={book.wiki} className="underline text-blue-700">
            Potter Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
