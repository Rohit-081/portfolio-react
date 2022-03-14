import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 2700 });
  }, []);
  return (
    <ContactStyled data-aos="flip-left">
      <div className="text-area">
        <div className="title">
          <h5>What's Next</h5>
          <h1
            onClick={() => {
              window.open("https://www.linkedin.com/in/jrohit081/");
            }}
          >
            {" "}
            <span>Get</span> In <span>Touch</span>With Me
          </h1>
          <p>
            Thank you for taking your time here and I'm open to new
            opportunities
            <br />
            God Bless You
          </p>
          <div className="contact-info">
            <h3>
              <span>Phone-Number: </span>+919755588893
            </h3>
            <h3>
              {" "}
              <span> Gmail: </span>
              jrohit081@gmail.com
            </h3>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/jrohit081/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="#fff"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/Rohit-081"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="#fff"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/Rohitja97655923"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="1.3em"
                height="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                data-v-28f2cc68=""
              >
                <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
              </svg>
            </a>
          </div>
          <div className="resume">
            <a
              href="mailto:jrohit081@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>Contact Me
            </a>
          </div>
          <div className="copy-right">
            Rohit Jain © 2022 All rights reserved
          </div>
        </div>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  background: #000000;
  width: 90%;
  color: #fff;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 0;
  .text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      h5 {
        color: rgba(198, 201, 216, 0.75);
        text-transform: uppercase;
        letter-spacing: 4px;
        display: block;
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 100;
        cursor: pointer;
      }
      h1 {
        font-size: 3rem;
        font-weight: 900;
        font-family: "Playfair Display", serif;
        cursor: pointer;
        span {
          color: #f9004d;
          &:hover {
            border-bottom: 1px solid #fff;
            transform: scale(1.3);
            transition: 0.5s;
            color: #f9004d;
          }
        }

        &:hover {
          border-bottom: 1px solid #fff;
          transform: scale(1.3);
          transition: 0.5s;
          color: #f9004d;
        }
      }
      p {
        margin-top: 30px;
        font-size: 20px;
        font-family: "Montserrat", sans-serif;
        line-height: 35px;
      }
      .contact-info {
        margin-top: 25px;
        h3 {
          letter-spacing: 3px;
          font-size: 21px;
          padding-bottom: 15px;
          font-family: "Montserrat", sans-serif;
          span {
            color: #f9004d;
            font-weight: 600;
            font-size: 21px;
          }
        }
      }
      .social-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        font-size: 40px;
        a {
          margin-right: 20px;
          color: #fff;
          text-decoration: none;
        }
      }

      .resume {
        margin-top: 40px;
        .links {
          padding: 10px 50px;
          position: relative;
          display: inline-block;
          background: #f9004d;
          color: #fff;
          overflow: hidden;
          border-radius: 5px;
          transition: 0.2s;
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          a {
            text-decoration: none;
          }
        }
      }

      .copy-right {
        text-align: center;
        margin-top: 20px;
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
      }
    }
  }
`;

export default ContactPage;
