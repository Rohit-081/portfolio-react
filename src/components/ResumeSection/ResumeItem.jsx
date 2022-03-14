import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
  width: 100%;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 20%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid #2e344e;
      background-color: #10121a;
    }
    p {
      display: inline-block;
      color: rgba(198, 201, 216, 0.75);
    }
  }
  .right-content {
    padding-left: 5rem;
    width: 80%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: #2e344e;
    }
    h5 {
      color: #f9004d;
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
      color: #2e344e;
    }
    p {
      color: #fff;
    }
  }
`;
export default ResumeItem;
