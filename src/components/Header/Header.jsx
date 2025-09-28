"use client";
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  Link,
} from "react-router-dom";
import { Container, Footer } from "../index";

const Header = () => {
  return (
    <>
      <Container>
        <header class="py-1 center">
          <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-center pt-5">
            <a
              class="flex-none font-semibold text-4xl text-black focus:outline-hidden focus:opacity-80"
              id="nav-brand-logo"
              href="/"
              aria-label="Brand"
            >
              Harry Potter
            </a>
          </nav>
        </header>

        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Header;
