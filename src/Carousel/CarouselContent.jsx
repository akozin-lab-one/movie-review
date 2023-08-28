import React from "react";

const CarouselContent = ({ activeIndex, movies }) => {
  return (
    <section>
      {movies.map((slide, index) => {
        console.log(slide);
        return (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img
              className="slide-image"
              src={`https://image.tmdb.org/t/p/w300/${slide.poster_path}`}
              alt=""
            />
          </div>
        );
      })}
    </section>
  );
};

export default CarouselContent;
// export default CarouselImage;
