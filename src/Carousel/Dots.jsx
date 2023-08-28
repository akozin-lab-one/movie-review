import React from "react";

const Dots = ({ activeIndex, onclick, movies }) => {
  return (
    <div className="all-dots">
      {movies.map((slide, index) => {
        // console.log(slide,index);
        return (
          <span
            key={index}
            className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
            onClick={() => onclick(index)}
          ></span>
        );
      })}
    </div>
  );
};

export default Dots;
