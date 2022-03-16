import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from "../AboutSection/AboutPage";
import ServicePage from "../ServiceSection/ServicePage";
import ContactPage from "../ContactSection/ContactPage";
import ResumePage from "../ResumeSection/ResumePage";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <>
      {" "}
      <HomePageStyled
        style={{
          backgroundImage: "url(" + require("../../images/img-2.jpg") + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="inner_text">
              <h3 data-aos="fade-left" data-aos-duration="3500">
                WELCOME TO MY WORLD
              </h3>
              <h1 data-aos="fade-up" data-aos-duration="3000">
                Hi, I'm Rohit Jain
              </h1>
              <h1
                className="special"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                React Developer
              </h1>
            </div>
          </div>
        </div>
      </HomePageStyled>
      <AboutPage />
      <ServicePage />
      <ResumePage />
      <ContactPage />
    </>
  );
}

const HomePageStyled = styled.div`
  margin-top: 0;
  width: 100%;
  height: 100vh;
  box-shadow: inset 0 0 0 1000px rgb(0 0 0 /20%);
  object-fit: content;
  .container {
    width: 90%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .row {
      position: relative;
      width: 100%;

      .inner_text {
        padding-top: 220px;

        h3 {
          color: rgba(198, 201, 216, 0.75);
          text-transform: uppercase;
          letter-spacing: 4px;
          display: block;
          margin-bottom: 20px;
          font-weight: 100;
        }

        h1 {
          color: #ffff;
          font-size: 75px;
          font-weight: 900;
          margin-bottom: 20px;
          width: 80%;
          font-family: "Montserrat", sans-serif;
        }

        .special {
          font-family: "Montserrat", sans-serif;
          color: #f9004d;
          font-weight: 900;
          display: flex;
          flex-direction: column;
          font-size: 75px;
        }
      }
    }
  }
`;

export default HomePage;
