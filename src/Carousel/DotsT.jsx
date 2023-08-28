import React from "react";

const DotsT = ({ activeIndex, onclick, tvseries }) => {
  return (
    <div className="all-dots">
      {tvseries.map((slide, index) => {
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

export default DotsT;
