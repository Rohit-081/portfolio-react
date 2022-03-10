import React, { useEffect } from "react";
import AOS from "aos";
import styled from "styled-components";
import gitIcon from "../../images/icons8-git.svg";
import "aos/dist/aos.css";

function ServicePage() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  });
  return (
    <ServiceStyled>
      <div className="services">
        <div className="title" data-aos="fade-up">
          <h1>
            <span>HERE</span> ARE SOME <span>THINGS</span> THAT I DO
          </h1>
        </div>
        <div className="service-container" data-aos="fade-right">
          <div className="inner-service">
            <span>
              <svg
                className="MultiSvgIcon-root"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z" />
              </svg>
            </span>
            <h1>Web Development</h1>
            <p>
              <span className="small-title">FrontEnd:</span>
              HTML5, CSS3, SASS, BootStrap,
              <br />
              <br />
              Material U-I Design, Javascript, React, Es6, Styled-Components,
              Redux
            </p>
          </div>
          <div className="inner-service">
            <span>
              <img className="git-image" src={gitIcon} alt="" />
            </span>
            <h1>Services, tools and Git</h1>
            <p>
              <span class="small-title">Task Manager: </span>Jira, Google
              Analytics, Firebase
            </p>
            <br />
            <p>
              <span class="small-title">Git Control: </span>Github, Bitbucket,
              Ubuntu, GIT, Bash
            </p>
          </div>
          <div className="inner-service">
            <span>
              <svg
                className="MultiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path>
              </svg>
            </span>
            <h1>Culture Fit</h1>
            <p>
              <span class="small-title">Soft Skills:</span> Good Communication,
              Team Work, Self-Motivated, Problem Solver,
              <br />
              <br />
              Time Management, Adaptability, Fast Learner, Optimistic
            </p>
          </div>
        </div>
      </div>
    </ServiceStyled>
  );
}

const ServiceStyled = styled.div`
  background-color: #101010;
  padding-top: 50px;
  padding-bottom: 80px;
  .services {
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      h1 {
        margin-top: 40px;
        font-family: "Playfair Display", serif;
        font-weight: 900;
        font-size: 2rem;
        span {
          color: #f9004d;
        }
      }
    }

    .service-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 3rem;
      gap: 3rem;
      margin-top: 50px;
      width: 90%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      padding-top: 50px;

      .inner-service {
        color: #fff;
        background-color: #191919;
        border-radius: 1rem;
        padding: 50px 0 50px 40px;

        .MultiSvgIcon-root {
          fill: #f4511e;
          width: 50px;
          height: 50px;
          display: inline-block;
          font-size: 1.5rem;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex-shrink: 0;
          user-select: none;
        }

        .git-image {
          width: 72px;
          height: 72px;
        }

        h1 {
          font-size: 27px;
          color: #fff;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }
        p {
          color: #fff;
          letter-spacing: 1px;
          line-height: 20px;
          font-size: 15px;
          font-family: "Poppins", sans-serif;
        }
        .small-title {
          font-size: 20px;
          font-weight: 900;
          color: #a9a9a9;
          font-family: "Playfair Display", serif;
        }
      }
    }
  }
`;

export default ServicePage;
