import { Link } from "react-router-dom";

const SearchCard = ({ name, cover, desc }) => {
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
        <div class="flex items-center bg-white shadow-xl rounded-3xl w-80 p-4 m-5">
          <div class="w-20 h-20">
            <img
              src={cover}
              alt={name}
              class="rounded-2xl object-cover w-full h-full"
            />
          </div>
          <div class="ml-4">
            <h2 class="text-lg text-gray-900 font-semibold capitalize">
              {name}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchCard;
