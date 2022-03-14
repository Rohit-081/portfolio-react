import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function SmallTitle({ icon, title }) {
  useEffect(() => {
    AOS.init({ duration: 2700 });
  }, []);
  return (
    <SmallTitleStyled data-aos="fade-left" data-aos-duration="1500">
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
}

const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  p {
    padding-right: 1rem;

    svg {
      font-size: 3rem;
      color: #f9004d;
    }
  }
  h3 {
    color: #fff;
    font-size: 2rem;
  }
`;

export default SmallTitle;
