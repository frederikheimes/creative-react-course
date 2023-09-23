import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";

export const AbouSection = () => {
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

//Styled Components
const StyledAbout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Img = styled.div`
  img {
    flex: 1;
    overflow: hidden;
    width: 80%;
    border-radius: 750px;
    border: solid 2px #23d997;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
