import React from "react";
import Skills from "../ResumeSection/Skills";
import Resume from "../ResumeSection/Resume";
import styled from "styled-components";

function ResumePage() {
  return (
    <ResumeStyled>
      <div className="skills">
        <Skills />
      </div>
      <div className="resume">
        <Resume />
      </div>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .skills {
    background-color: #000000;
  }
  .resume {
    background-color: #101010;
  }
`;

export default ResumePage;
