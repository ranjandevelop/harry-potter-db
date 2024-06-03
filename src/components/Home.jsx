import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
  const categoryStyle = {
    width: "250px",
    height: "250px",
  };
  return (
    <>
      <div className="p-4 h-[40vh]">
        <div className="flex justify-center text-xs md:text-xl flex-wrap">
          <p className="flex flex-col text-center m-4">
            <span className="uppercase">characters</span>
            <span>4657</span>
          </p>
          <p className="flex flex-col text-center m-4">
            <span className="uppercase">books</span>
            <span>7</span>
          </p>
          <p className="flex flex-col text-center m-4">
            <span className="uppercase">spells</span>
            <span>315</span>
          </p>
          <p className="flex flex-col text-center m-4">
            <span className="uppercase">potions</span>
            <span>168</span>
          </p>
          <p className="flex flex-col text-center m-4">
            <span className="uppercase">Movies</span>
            <span>11</span>
          </p>
        </div>
        <div className="quote text-left m-5 md:text-center md:p-5">
          Potter Database is a collaborative knowledge base about the
          widely-popular series by j.k rowling, including the books, movies,
          chracters, and much more.
        </div>
      </div>
      <div className="grid">
        <span className="m-4 font-bold uppercase text-center">
          Famous Characters
        </span>
        <div className="m-4 flex flex-wrap justify-center">
          <Link key={"harry-potter"} to="/characters/harry-potter">
            <Card
              name="Harry Potter"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg`}
            />
          </Link>
          <Link key={"ron-weasley"} to="/characters/ronald-weasley">
            <Card
              name="Ronald Weasley"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/8/85/Ron_Weasley.jpg`}
            />
          </Link>
          <Link key={"hermionde-granger"} to="/characters/hermione-granger">
            <Card
              name="Hermione Granger"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/3/34/Hermione_Granger.jpg`}
            />
          </Link>
          <Link key={"albus-dumbledore"} to="/characters/albus-dumbledore">
            <Card
              name="Albus Dumbledore"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg`}
            />
          </Link>
          <Link key={"tom-riddle"} to="/characters/tom-riddle">
            <Card
              name="Tom Riddle"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/a/aa/Voldemort_Headshot_DHP1.png`}
            />
          </Link>
        </div>
      </div>

      <div className="grid">
        <span className="m-4 font-bold uppercase text-center">Categories</span>
        <div className="m-4 flex flex-wrap justify-center">
          <Link to="/books">
            <Card
              key={"books"}
              name="Books"
              cover={`https://images.pexels.com/photos/10025211/pexels-photo-10025211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              styles={categoryStyle}
            />
          </Link>

          <Link to="/potions">
            <Card
              key={"potions"}
              name="Potions"
              cover={`https://images.pexels.com/photos/7978811/pexels-photo-7978811.jpeg`}
              styles={categoryStyle}
            />
          </Link>

          <Link to="/movies">
            <Card
              key={"movies"}
              name="Movies"
              cover={`https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              styles={categoryStyle}
            />
          </Link>

          <Link to="/spells">
            <Card
              key={"spells"}
              name="Spells"
              cover={`https://images.pexels.com/photos/7978061/pexels-photo-7978061.jpeg`}
              styles={categoryStyle}
            />
          </Link>

          <Link to="/characters">
            <Card
              key={"characters"}
              name="Characters"
              cover={`https://images.pexels.com/photos/8389770/pexels-photo-8389770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              styles={categoryStyle}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
