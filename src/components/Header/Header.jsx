"use client";
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  Link,
} from "react-router-dom";
import { Container, Footer } from "../index";
// import { TextHoverEffect } from "../ui/text-hover-effect";

const Header = () => {
  return (
    <>
      <Container>
        <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-transparent py-3 border">
          <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between pt-5">
            <a
              class="flex-none font-semibold text-4xl text-black focus:outline-hidden focus:opacity-80"
              id="nav-brand-logo"
              href="/"
              aria-label="Brand"
            >
              Harry Potter
            </a>
            <div class="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
              <a
                class="font-medium text-blue-500 focus:outline-hidden"
                href="#"
                aria-current="page"
              >
                Charcters
              </a>
              <a
                class="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                href="#"
              >
                Explore
              </a>
              <a
                class="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                href="#"
              >
                Muggle
              </a>
            </div>
          </nav>
        </header>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Header;
