import React from "react";
import testimonal from "./Testimonals.module.css";
import img1 from "./images/person_1.jpg.webp";
import img2 from "./images/person_2.jpg.webp";
import img3 from "./images/person_3.jpg.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import themeContext from "../Context/Theme/ThemeContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";



function Testimonals() {
  const mode = useContext(themeContext);
  const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1024: { items: 3 },
  };
  
  const items = [
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="1">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="2">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Drew Wood</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="3">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img3} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Michelle Alisson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="4">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="5">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Drew Wood</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="6">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img3} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Michelle Alisson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="7">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Carl Anderson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="8">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Drew Wood</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
    <div className={`item ${testimonal.item} ${
      mode.theme === "dark" ? testimonal.itemDark : ""
    }`} data-value="9">
      <div className={`${testimonal.testimonalv2} ${
              mode.theme === "dark" ? testimonal.paraDark : ""
            } `}>
        <p>
          “Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.”
        </p>
        <div className={`${testimonal.author} d-flex`}>
          <div className={`${testimonal.authorpic}`}>
            <img src={img3} alt="" className="img-fluid" />
          </div>
          <div className={`${testimonal.authorname} ${
                  mode.theme === "dark" ? testimonal.authnameDark : ""
                } `}>
            <h3>Michelle Alisson</h3>
            <span>Director at Google</span>
          </div>
        </div>
      </div>
    </div>,
  ];

  AOS.init();
  return (
    <div
    className={`${testimonal.sliderwrap}`}
    data-aos="fade-up"
    data-aos-delay="100"
    >
      <AliceCarousel
        mouseTracking 
        items={items}
        responsive={responsive}
        controlsStrategy="default"
        keyboardNavigation="true"
        animationDuration={1000}
        autoPlay="true"
        infinite="true"
        autoPlayInterval={2500}
        disableButtonsControls="true"
      />
    </div>
  );
}

export default Testimonals;
