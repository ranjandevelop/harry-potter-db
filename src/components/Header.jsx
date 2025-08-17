"use client";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { use } from "react";

const Header = () => {
  const spells = ["Expelliarmus", "Lumos", "Alohomora", "Expecto Patronum"];
  let randomNumber = Math.floor(Math.random() * spells.length);
  console.log(spells[randomNumber]);
  const params = useLocation().pathname;
  console.log("URL", params);
  function getSpell() {
    if (
      params == "/spells" ||
      params == "/characters" ||
      params == "/books" ||
      params == "/movies" ||
      params == "/potions"
    ) {
      return "Accio";
    } else if (params == "/") {
      return spells[randomNumber];
    }
    return;
  }
  return (
    <>
      <div className="hogwarts md:pt-20 pt-16 bg-fixed h-[100%] pb-10">
        {getSpell() ? (
          <div className="h-[15rem] hidden bg-dark items-center justify-center md:block">
            <TextHoverEffect text={getSpell()} />
          </div>
        ) : (
          <></>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default Header;
