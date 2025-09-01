const Card = ({ name, cover, styles }) => {
  return (
    <>
      <div className="relative min-h-[150px] m-5" style={styles}>
        <img
          src={cover}
          alt=""
          className="z-0 h-full w-[200px] rounded-full object-cover border"
          style={{
            border: "5px solid white",
          }}
        />

        <div className="absolute bottom-4 left-4 text-left">
          <span
            className="text-xs font-semibold text-white md:text-md"
            style={{
              position: "absolute",
              bottom: "-0.625rem",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#140f43",
              padding: ".625rem 1.875rem",
              " border-radius": "2.125rem",
              "font-size": "1.375rem",
              "line-height": "1.6875rem",
              // "color: #fff",
              "white-space": "nowrap",
              "text-align": "center",
              "letter-spacing": "-1px",
              transition: "background-color .3s",
            }}
          >
            {name}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
