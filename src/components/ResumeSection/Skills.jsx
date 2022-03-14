import React from "react";
import styled from "styled-components";
import Title from "../ResumeSection/Title";
import ProgressBar from "../ResumeSection/ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Sk"} span={"ills"} />
      <div className="skills">
        <ProgressBar title={"JAVASCRIPT"} width={"75%"} text={"75%"} />
        <ProgressBar title={"REACT"} width={"70%"} text={"70%"} />
        <ProgressBar title={"REDUX"} width={"60%"} text={"60%"} />
        <ProgressBar title={"HTML5"} width={"80%"} text={"80%"} />
        <ProgressBar title={"CSS3"} width={"70%"} text={"70%"} />
        <ProgressBar title={"SASS"} width={"60%"} text={"60%"} />
        <ProgressBar title={"TYPESCRIPT"} width={"50%"} text={"50%"} />
        <ProgressBar title={"LINUX"} width={"70%"} text={"70%"} />
      </div>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 36px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export default Skills;
