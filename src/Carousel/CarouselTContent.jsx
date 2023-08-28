import React from 'react'
import myImage from '../image/un.webp'

const CarouselTContent = ({activeIndex, tvseries}) => {
    console.log(tvseries);
    return (

          <section>
            {tvseries.map((slide, index) => {
                console.log(slide);
              return (
                <div
                  key={index}
                  className={index === activeIndex ? "slides active" : "inactive"}
                >
                  {
                    slide.poster_path !== null ? <img className="slide-image" src={`https://image.tmdb.org/t/p/w200/${slide.poster_path}`} alt="" /> : <img className="slide-image" src={myImage} alt="" />
                  }

                </div>
              );
            })}
          </section>

      );
}

export default CarouselTContent