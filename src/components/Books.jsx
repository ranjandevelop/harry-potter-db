import React, { useEffect, useState } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import Card from "./Card";

const Books = () => {
  const [booksData, setBooksData] = useState([]);
  const url = useLocation().pathname;
  console.log(url);
  useEffect(() => {
    fetch(`http://api.potterdb.com/v1/${url}`)
      .then((res) => res.json())
      .then((res) => setBooksData(res.data));
  }, [url]);
  console.log(typeof booksData);
  return (
    <>
      <div className="grid md:grid-cols-4 place-items-center gap-4 p-10">
        {booksData.length > 0 ? (
          booksData.map((book) => (
            <Link key={book.id} to={`/books/${book.attributes.slug}`}>
              <Card
                key={book.id}
                name={book.attributes.title}
                cover={book.attributes.cover}
                className=""
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

export default Books;
