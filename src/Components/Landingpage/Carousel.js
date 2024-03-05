import React from "react";
import weather from "./images/weather.jpg"
import tech from "./images/tech.jpg"
import sports from "./images/sports.jpg"
import carosel from "./Carouse.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

function Carousel() {
    AOS.init();
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade"
      data-aos="fade-up" data-aos-delay="100"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class={`${carosel.innercarosel} carousel-inner`}>
          <div class={`${carosel.caritem} carousel-item active`}>
            <img src={sports} class="d-block w-100" alt="..." />
            <div className={`${carosel.gradient}`}></div>
            <div class="carousel-caption d-none d-md-block">
              <h5 className={`${carosel.captionH} `}>Sports</h5>
              <p className={`${carosel.captionP} `}>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class={`${carosel.caritem} carousel-item`}>
            <img src={tech} class="d-block w-100" alt="..." />
            <div className={`${carosel.gradient}`}></div>
            <div class="carousel-caption d-none d-md-block">
              <h5 className={`${carosel.captionH} `}>Tech</h5>
              <p className={`${carosel.captionP} `}>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class={`${carosel.caritem} carousel-item`}>
            <img src={weather} class="d-block w-100" alt="..." />
            <div className={`${carosel.gradient}`}></div>
            <div class="carousel-caption d-none d-md-block">
              <h5 className={`${carosel.captionH} `}>Weather</h5>
              <p className={`${carosel.captionP} `}>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
