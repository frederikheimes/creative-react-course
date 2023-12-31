import React from "react";
import home1 from "../img/home1.png";
//Styled

import { StyledAbout, Description, Img, Hide } from "../styles.js";

export const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your
              <span> dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Img>
        <img src={home1} alt="guy with a camera" />
      </Img>
    </StyledAbout>
  );
};
