import React, { useEffect } from "react";
import styled from "styled-components";
import avatar from "../../images/081.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 2700 });
  }, []);

  return (
    <AboutStyled>
      <div className="about">
        <div className="title">
          <h1
            className="about-me"
            data-aos="fade-left"
            data-aos-duration="3500"
          >
            <span>A</span>bout<span> Me </span>
          </h1>
        </div>
        <div className="about-container">
          <div className="image-card" data-aos="fade-up">
            <img src={avatar} alt="" />
          </div>

          <div className="about-intro" data-aos="fade-down">
            <h3 className="content-title">SENIOR ENGINEER</h3>
            <p className="text">
              Fueled by high energy levels and boundless enthusiasm, I'm easily
              inspired and more then willing to follow my fascinations wherever
              they take me. I'm never satisfied to just come up with ideas.
              <br />
              <br />
              Instead I have an almost impulsive need to act on them. I'm a
              people-person with deep emotions and empathy, a natural
              storyteller. I'm able to inspire and am at my best when I'm
              sharing my creative expressions with others.
              <br />
              <br />
              I am currently working as a Senior Engineer at Brillio.
              <br />
              <br />
              <a href="https://www.linkedin.com/in/jrohit081/">
                Lets make something special
              </a>
            </p>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  background-color: --var(--background-dark-color);
  color: #fff;
  width: 90%;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;

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
  .about-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    .image-card {
      position: relative;
      min-height: 700px;
      width: 70%;
      img {
        position: absolute;
        width: 70%;
        height: 70%;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .about-intro {
      width: 55%;
      .content-title {
        color: rgba(198, 201, 216, 0.75);
        text-transform: uppercase;
        letter-spacing: 4px;
        display: block;
        margin-bottom: 20px;
        font-weight: 100;
        margin-right: 40px;
      }
      .text {
        margin-right: 40px;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        a {
          margin-top: 50px !important;
          background: linear-gradient(
            180deg,
            var(--mainColor) 0,
            var(--mainColor)
          );
          background-position: 0 100%;
          background-repeat: repeat-x;
          background-size: 3px 3px;
          color: #f9004d;
          text-decoration: none;
        }
      }
    }
  }
`;

export default AboutPage;
