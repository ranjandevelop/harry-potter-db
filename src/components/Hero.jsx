import character_index from "../assets/character_index.png";
const Hero = () => {
  return (
    <>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Welcome to the Hogwarts.
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Step into the wizarding world of Harry Potter explore detailed
              character profiles, uncover the secrets of magical spells, and
              dive into the art of potions. A space for fans to relive the magic
              through stories, knowledge, and enchantment.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
            <div class="flex flex-col items-center md:p-4">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                7
              </div>
              <div class="text-sm font-semibold sm:text-base">Books</div>
            </div>

            <div class="flex flex-col items-center md:p-4">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                5246
              </div>
              <div class="text-sm font-semibold sm:text-base">Characters</div>
            </div>

            <div class="flex flex-col items-center md:p-4">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                333
              </div>
              <div class="text-sm font-semibold sm:text-base">Spells</div>
            </div>

            <div class="flex flex-col items-center md:p-4">
              <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                168
              </div>
              <div class="text-sm font-semibold sm:text-base">Potions</div>
            </div>
          </div>
        </div>
      </div>
      {/* <section class="bg-[#2c228b]">
        <div className="container-fluid">
          <div className="row flex justify-center">
            <div className="col-5">
              <img src={character_index} alt="" />
            </div>
            <div className="col-7">
              <h2>Meet the Characters</h2>
              <p>
                Witches, wizards and Muggles! We meet so many characters in the
                first Harry Potter book. Learn more about your favourite (or
                least favourite) ones here.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
