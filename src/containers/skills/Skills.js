import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const scrollTo = query.get("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="main" id="services">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do:
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
