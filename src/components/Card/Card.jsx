import { Link } from "react-router-dom";

const Card = ({ name, cover, desc }) => {
  return (
    <>
      <Link
        to={
          !(
            name === "Characters" ||
            name === "Spells" ||
            name === "Potions" ||
            name === "Books" ||
            name === "Movies"
          )
            ? `/characters/${name.toLowerCase().replace(/\s+/g, "-")}`
            : `/${name.toLowerCase().replace(/\s+/g, "-")}`
        }
      >
        <div class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
          <img
            src={cover}
            loading="lazy"
            alt="Photo by Minh Pham"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

          <div class="relative mt-auto p-4">
            <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">
              {name}
            </h2>

            <span class="font-semibold text-indigo-300">Read more</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
