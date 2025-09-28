import Hero from "../../components/Hero";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <>
      <Hero />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Explore
            </h2>

            {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p> */}
          </div>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {categories.map((item, i) => (
              <Card
                key={i}
                name={item.title}
                cover={item.image}
                desc={item.description}
              />
            ))}
          </div>
        </div>
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
