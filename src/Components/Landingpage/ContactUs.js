import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ctstyle from "./ContactUs.module.css";
import contact from "./images/contactUs.png";


function ContactUs() {
    AOS.init();
  return (
    <div>
      <div className={`${ctstyle.section}`}>
        <div className="container">
          <div
            className={`${ctstyle.areacontainer} row justify-content-between`}
          >
            <div className="col-lg-5" data-aos="fade-up">
              <div className={`${ctstyle.headingtext}`}>
                <span className={`${ctstyle.lighttext}`}>Contact Us</span>
                <h2 className={`${ctstyle.maintext} mt-2`}>Get In Touch</h2>
                <p className={`${ctstyle.desctext} mt-2`}>
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>

              <form class="row g-3">
                <div class="col-md-6">
                    <label  for="fname" class={` ${ctstyle.desctext} form-label mb-0`}>
                    First Name
                  </label>
                  <input type="text" class={`${ctstyle['form-control']} form-control`} id="fname" />
                </div>
                <div class="col-md-6">
                  <label for="lname" class={` ${ctstyle.desctext} form-label mb-0`}>
                    Last Name
                  </label>
                  <input
                    type="password"
                    class={`${ctstyle['form-control']} form-control`}
                    id="lname"
                  />
                </div>
                <div class="col-12">
                  <label for="email" class={` ${ctstyle.desctext} form-label mb-0`}>
                    Email
                  </label>
                  <input
                    type="email"
                    class={`${ctstyle['form-control']} form-control`}
                    id="email"
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class={` ${ctstyle.desctext} form-label mb-0`}>
                    Message
                  </label>
                  <textarea
                    class={`${ctstyle['form-control']} form-control`}
                    aria-label="With textarea"
                    rows="4"
                  ></textarea>
                </div>
                <div>
                <button className={`${ctstyle.contactbtn}`}>
                  Send Message
                </button>
              </div>
              </form>
            </div>
            <div className="col-lg-6 p-0">
              <div className={`img-wrap`} data-aos="fade-left"
                data-aos-delay="400">
                <img src={contact} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
