import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import arrowIcon from "../../assets/images/arrow-teal.svg"

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    const firstExperience = experience.sections[0]?.experiences[0];

    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h2
                  className="experience-heading-sub-text"  
                  style={{ color: theme.text }}
                >
                  {firstExperience?.company}
                </h2>
                <h3
                  className="experience-header-detail-text"
                  style={{ color: theme.text }}
                >
                  {firstExperience?.duration} • {firstExperience?.location}
                </h3>
                <p
                  className="experience-description-text"
                  style={{ color: theme.secondaryText }}
                >
                  {experience.description}
                </p>
                {firstExperience?.accomplishments.map((item, index) => (
                  <div key={index} className="bullet-container">
                    <img src={arrowIcon} alt='' className='bullet-icon' />
                    <span className='bullet-text' style={{ color: theme.secondaryText }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
