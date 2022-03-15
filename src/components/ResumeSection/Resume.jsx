import React from "react";
import styled from "styled-components";
import Title from "../ResumeSection/Title";
import SmallTitle from "../ResumeSection/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../ResumeSection/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;

  return (
    <ResumeStyled>
      <Title title={"Res"} span={"ume"} />
      <div className="small-title">
        <SmallTitle icon={briefcase} title={"Working Experience"} />
      </div>
      <div className="resume-content">
        <ResumeItem
          year={"2021 - present"}
          title={"Senior Engineer"}
          subTitle={"Brillio"}
          text={
            "Developing user interface by using the React. Build, optimize and enhance the UI performance."
          }
        />
        <ResumeItem
          year={"2020 - 2021"}
          title={"Software Engineer"}
          subTitle={"Java R&D Pvt. Ltd."}
          text={
            "Involved in developing code in JavaScript. Done DB Migration using MongoDB and Payment gateway integration by using Java."
          }
        />
        <ResumeItem
          year={"2018 - 2020"}
          title={"Assistant System Engineer"}
          subTitle={"TATA CONSULTANCY SERVICES"}
          text={
            "Designed several TCS internal and Govt. Organization forms like TGIP, PGIMER,SSC, MPHC, CGHC, XAT using HTML, CSS and JavaScript."
          }
        />
      </div>
      <div className="small-title u-small-title-margin">
        <SmallTitle icon={school} title={"Educational Qualifications"} />
      </div>
      <div className="resume-content ">
        <ResumeItem
          year={"2014 - 2018"}
          title={"Computer Science Engineering"}
          subTitle={"UIT - RGPV, BHOPAL, M.P."}
          text={"  Graduated in 2018 with 7.15 CGPA."}
        />
        <ResumeItem
          year={"2012 - 2013"}
          title={"Higher Secondary Certificate"}
          subTitle={"GOVT. BOYS H. S. SCHOOL, ARON , M.P."}
          text={" Graduated in 2013 with 84.6%. "}
        />
      </div>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  width: 100%;
  padding: 0 50px 100px 50px;
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid #2e344e;
  }
`;
export default Resume;
