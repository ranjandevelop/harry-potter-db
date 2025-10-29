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
        <Outlet />
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default Header;
