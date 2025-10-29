import hogwartshero from "../assets/hogwarts-hero.mp4";
const Hero = () => {
  return (
    <>
      <section class="bg-center bg-no-repeat bg-blend-multiply h-[100vh]">
        <div className="absolute inset-0 bg-black/40 z-[-8]"></div>
        <video
          src={hogwartshero}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-[-9]"
        ></video>
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 z-[10]">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            <a
              class="flex-none font-semibold text-8xl text-black focus:outline-hidden focus:opacity-80"
              id="nav-brand-logo"
              href="/"
              aria-label="Brand"
            >
              Welcome to the Hogwarts.
            </a>
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">
            Step into the wizarding world of Harry Potter explore detailed
            character profiles, uncover the secrets of magical spells, and dive
            into the art of potions. A space for fans to relive the magic
            through stories, knowledge, and enchantment.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#sectionHarryPotter"
              class="w-[110px] h-[40px] flex items-center justify-start gap-2 bg-white rounded-full text-neutral-900 font-semibold border-none cursor-pointer pl-2 shadow-md transition-all duration-500 hover:bg-[] active:scale-95"
            >
              <svg
                class="h-6 transition-transform duration-[1500ms] hover:rotate-[250deg]"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                  fill="rgb(19, 19, 19)"
                ></path>
              </svg>
              Accio!!!
            </a>
          </div>
        </div>
      </section>
      <div class="bg-white py-6 sm:py-8 lg:py-12" id="sectionHarryPotter">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
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
    </>
  );
};

export default Hero;
