import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
//import { greeting } from "../../portfolio.js";
//import { seo } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  //const currentYear = new Date().getFullYear();

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {/*Made with <span role="img">❤️</span> by {greeting.title}*/}
          {/*© {currentYear} {seo.og.title}*/}
          "All that we do...begins and ends with ourselves."
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
