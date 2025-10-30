import { Hero } from "../../components/index";
import Card from "../../components/Card/Card";

import texture from "../../assets/section_texture_bg.png";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <div class="bg-neutral-800 py-6 sm:py-8 lg:py-12" id="explore">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8"> */}
      {/* <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Explore
            </h2>
          </div> */}

      {/* <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
            {categories.map((item, i) => (
              <Card
                key={i}
                name={item.title}
                cover={item.image}
                desc={item.description}
              />
            ))}
          </div> */}
      {/* </div>
      </div> */}
      <div
        class="p-10 card__grid place-items-center bg-[#003028] place-content-center min-h-screen"
        style={{ backgroundImage: `url(${texture})` }}
        id="explore"
      >
        <a
          href="/spells"
          class="card--1 bg-gray-50 shadow-xl rounded-3xl max-w-xs pt-4 pb-5 px-4"
        >
          <div class="w-full h-64">
            <img
              class="w-full h-full object-cover rounded-2xl"
              src="https://static.wikia.nocookie.net/harrypotter/images/9/99/Accio_cup.gif/"
              alt="Antelope Canyon"
            />
          </div>

          <div>
            <h2 class="capitalize font-semibold text-xl mt-3 text-gray-900">
              Spells
            </h2>
            <p class="text-gray-400 flex justify-between items-center">
              A collection of spells from the wizarding world.{" "}
            </p>
          </div>
        </a>
        <a
          href="/potions"
          class="card--2 flex items-center bg-white shadow-xl rounded-3xl w-80 p-4"
        >
          <div class="w-20 h-20">
            <img
              src="https://static.wikia.nocookie.net/harrypotter/images/4/44/PotionsHPCard.jpg/"
              alt="Elise Doe"
              class="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <div class="ml-4">
            <h2 class="text-lg text-gray-900 font-semibold capitalize">
              Potions
            </h2>
            <p class="text-gray-400 mt-1 mb-2">
              A collection of potions from the wizarding world.
            </p>
          </div>
        </a>

        <a
          href="/books"
          class="card--3 bg-white shadow-xl rounded-3xl max-w-xs pt-4 pb-8 px-4"
        >
          <div class="w-full h-64">
            <img
              class="w-full h-full object-cover rounded-2xl"
              src="https://static.wikia.nocookie.net/harrypotter/images/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%93_Bloomsbury_2014_Children%27s_Edition_%28Paperback_and_Hardcover%29.jpg/"
              alt="Galaxy Abstract Paint"
            />
          </div>

          <div>
            <h2 class="capitalize font-semibold text-xl mt-3 mb-2 text-gray-900">
              Books
            </h2>
            <p class="text-gray-400 flex justify-between items-center">
              A collection of books from the wizarding world.
            </p>
          </div>
        </a>
        <a
          href="/movies"
          class="card--4 flex items-center bg-white shadow-xl rounded-3xl w-80 p-4"
        >
          <div class="w-20 h-20">
            <img
              src="https://static.wikia.nocookie.net/harrypotter/images/b/bd/Aberto.gif/"
              alt="John Doe"
              class="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <div class="ml-4">
            <h2 class="text-lg text-gray-900 font-semibold capitalize">
              Movies
            </h2>
            <p class="text-gray-400 mt-1 mb-2">
              A collection of movies from the wizarding world.
            </p>
          </div>
        </a>
      </div>
    </>
  );
};
const characters = [
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

const categories = [
  {
    title: "Spells",
    description: "A collection of spells from the wizarding world.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/9/99/Accio_cup.gif/",
  },
  {
    title: "Potions",
    description: "A collection of potions from the wizarding world.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/4/44/PotionsHPCard.jpg/",
  },
  {
    title: "Characters",
    description: "A collection of characters from the wizarding world.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/1/14/BellatrixLestrange.png/",
  },
  {
    title: "Movies",
    description: "A collection of movies from the wizarding world.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/b/bd/Aberto.gif/",
  },
  {
    title: "Books",
    description: "A collection of books from the wizarding world.",
    image:
      "https://static.wikia.nocookie.net/harrypotter/images/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%93_Bloomsbury_2014_Children%27s_Edition_%28Paperback_and_Hardcover%29.jpg/",
  },
];

export default Home;
