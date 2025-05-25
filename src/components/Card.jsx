import React, { useEffect } from "react";

const Card = ({ name, cover, styles }) => {
  return (
    <>
      <div
        className="relative min-h-[150px] rounded-md shadow-[1px_1px_10px_rgba(0,0,0,0.4)] m-4"
        style={styles}
      >
        <img
          src={cover}
          alt=""
          className="z-0 h-full w-[200px] rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-xs font-semibold text-white md:text-md">
            <>{name}</>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Card;
