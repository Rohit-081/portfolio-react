import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function Title({ title, span }) {
  useEffect(() => {
    AOS.init({ duration: 3500 });
  }, []);

  return (
    <TitleStyled data-aos="fade-up" data-aos-duration="1500">
      <div className="title">
        <h2 className="about-me">
          {title}
          <span>{span}</span>
        </h2>
      </div>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  color: #fff;
  width: 100%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  position: relative;
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .about-me {
    color: #fff;
    font-family: "Playfair Display", serif;
    font-size: 3rem;
    span {
      color: #f9004d;
    }
  }
`;

export default Title;
