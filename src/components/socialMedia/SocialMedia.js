import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styled wrapper with backgroundColor hover logic
const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

// Helper to determine icon prefix based on known brand icons
function getFAIcon(iconString) {
  if (!iconString) return null;

  const iconName = iconString.replace("fa-", "");

  // Extend this list if you use more brand icons
  const brandIcons = [
    "github",
    "linkedin-in",
    "youtube",
    "tiktok",
    "google",
    "facebook",
    "instagram",
    "x-twitter",
    "discord",
    "whatsapp",
  ];

  const prefix = brandIcons.includes(iconName) ? "fab" : "fas";

  return [prefix, iconName];
}

export default function SocialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => (
        <a
          key={i}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper {...media} {...props}>
            <FontAwesomeIcon icon={getFAIcon(media.fontAwesomeIcon)} />
          </IconWrapper>
        </a>
      ))}
    </div>
  );
}
