import React, { useState } from "react";
// import Card from "./Card";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
// import DeathlyHollow from "../assets/25.webp";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const Home = () => {
  return (
    <>
      {/* <div className="grid">
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
      </div> */}
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            className={i === 3 || i === 6 ? "" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
};

const items = [
  {
    title: "Harry Potter",
    description: "Harry James Potter, the Boy Who Lived.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/e/ea/Harry_Potter_MP.png",
  },
  {
    title: "Ronald Weasley",
    description: "Ronald Bilius Weasley, Harry's loyal friend.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/e/e4/Ronald_Weasley_MP.png/",
  },
  {
    title: "Hermione Granger",
    description: "Hermione Jean Granger, the brightest witch of her age.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/f/fd/Hermione_Granger_MP.png/",
  },
  {
    title: "Ginny Weasley",
    description:
      "Ginny Weasley, the youngest child and only daughter of the Weasley family.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/6/6d/Ginny_Weasley_MP.png/",
  },
  {
    title: "Neville Longbottom",
    description: "Neville Longbottom, a brave Gryffindor student.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/9/9b/Neville_Longbottom_MP.png/",
  },
  {
    title: "Albus Dumbledore",
    description:
      "Albus Percival Wulfric Brian Dumbledore, the wise and powerful headmaster.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/7/75/Albus_Dumbledore_%28HBPF_promo%29.jpg",
  },
  {
    title: "Tom Riddle",
    description: "Tom Riddle, the dark wizard who became Voldemort.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/6/66/Lord_Voldemort_MP.png/",
  },
  {
    title: "Luna Lovegood",
    description: "Luna Lovegood, a quirky and kind-hearted Ravenclaw student.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/7/75/Luna_Lovegood_MP.png/",
  },
  {
    title: "Draco Malfoy",
    description: "Draco Malfoy, a cunning Slytherin student.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/7/7d/Draco_Malfoy_MP.png/",
  },
  {
    title: "Severus Snape",
    description: "Severus Snape, a complex character with a mysterious past.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/d/df/Severus_Snape_MP.png/",
  },
];

export default Home;
