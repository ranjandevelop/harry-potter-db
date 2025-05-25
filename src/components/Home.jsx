import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import DeathlyHollow from "../assets/25.webp";
const Home = () => {
  const categoryStyle = {
    width: "200px",
    height: "150px",
  };
  return (
    <>
      <div className="grid">
        <span className="m-4 mb-0 font-bold uppercase flex align-middle d-inline">
          <img src={DeathlyHollow} alt="" className="" />{" "}
          <h4 id="category-title" className="text-[#856538]">
            Characters
          </h4>
          <img src={DeathlyHollow} alt="" className="" />{" "}
        </span>
        <div className="md:m-4 mt-0 flex flex-wrap justify-evenly">
          <Link key={"harry-potter"} to="/characters/harry-potter">
            <Card
              name="Harry Potter"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/c/ce/Harry_Potter_DHF1.jpg`}
            />
          </Link>
          <Link key={"ron-weasley"} to="/characters/ronald-weasley">
            <Card
              name="Ronald Weasley"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/4/44/Ronald_Weasley_DHF1.jpg`}
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
              cover={`https://static.wikia.nocookie.net/harrypotter/images/7/75/Albus_Dumbledore_%28HBPF_promo%29.jpg`}
            />
          </Link>
          <Link key={"tom-riddle"} to="/characters/tom-riddle">
            <Card
              name="Tom Riddle"
              cover={`https://static.wikia.nocookie.net/harrypotter/images/9/97/Voldemort_Headshot_DHF1.png`}
            />
          </Link>
          {/*  */}
        </div>
      </div>

      <div className="grid">
        <span className="m-4 mb-0 font-bold uppercase flex align-middle d-inline">
          <img src={DeathlyHollow} alt="" className="" />{" "}
          <h4 id="category-title" className="text-[#856538]">
            Categories
          </h4>
          <img src={DeathlyHollow} alt="" className="" />{" "}
        </span>
        <div className="m-4 flex flex-wrap justify-evenly">
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
