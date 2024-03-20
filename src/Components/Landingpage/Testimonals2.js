import React from "react";
import testimonal from "./Testimonals.module.css";
import img1 from "./images/person_1.jpg.webp";
import img2 from "./images/person_2.jpg.webp";
import img3 from "./images/person_3.jpg.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import themeContext from "../Context/Theme/ThemeContext";

function Testimonals() {
  const mode = useContext(themeContext);
  AOS.init();
  return (
    <div
      className={`${testimonal.sliderwrap}`}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className={`${testimonal.testimonalnav}`}>
        <span className={`${testimonal.prev}`}>
          <i class="fa-solid fa-chevron-left"></i>
        </span>
        <span className={`${testimonal.next}`}>
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </div>

      <div className={`${testimonal.pagination}`}>
        <button></button>
        <button></button>
        <button></button>
      </div>

      <div className={`${testimonal.items}`}>
        <div
          className={`${testimonal.item} ${
            mode.theme === "dark" ? testimonal.itemDark : ""
          }`}
        >
          <div
            className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            }`}
          >
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.”
            </p>
            <div className={`${testimonal.author} d-flex`}>
              <div className={`${testimonal.authorpic}`}>
                <img src={img1} alt="" className="img-fluid" />
              </div>
              <div
                className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                }`}
              >
                <h3>Carl Anderson</h3>
                <span>Director at Google</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${testimonal.item} ${
            mode.theme === "dark" ? testimonal.itemDark : ""
          }`}
        >
          <div
            className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            }`}
          >
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.”
            </p>
            <div className={`${testimonal.author} d-flex`}>
              <div className={`${testimonal.authorpic}`}>
                <img src={img2} alt="" className="img-fluid" />
              </div>
              <div
                className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                }`}
              >
                <h3>Drew Wood</h3>
                <span>Director at Google</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${testimonal.item} ${
            mode.theme === "dark" ? testimonal.itemDark : ""
          }`}
        >
          <div
            className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            }`}
          >
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.”
            </p>
            <div className={`${testimonal.author} d-flex`}>
              <div className={`${testimonal.authorpic}`}>
                <img src={img3} alt="" className="img-fluid" />
              </div>
              <div
                className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                }`}
              >
                <h3>Michelle Alisson</h3>
                <span>Director at Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
