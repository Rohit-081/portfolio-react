import React, { useEffect } from "react";
import styled from "styled-components";

function ProgressBar({ title, width, text }) {
  return (
    <ProgressBarStyled>
      <div className="small-title">{title}</div>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div`
  width: 100%;
  padding: 20px;
  .small-title {
    font-size: 20px;
    font-weight: 900;
    color: #a9a9a9;
    font-family: "Playfair Display", serif;
  }
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1rem;
      color: #fff;
    }
    .progress {
      position: relative;
      width: 80%;
      height: 0.5rem;
      background-color: #2e344e;
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: #f9004d;
      }
    }
  }
`;

export default ProgressBar;
