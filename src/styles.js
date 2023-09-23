import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Img = styled.div`
  img {
    flex: 1;
    overflow: hidden;
    width: 80%;
    border-radius: 750px;
    border: solid 2px #23d997;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
