import React, { Component } from "react";

export default class SmartHomeImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        id="smart-home-illustration"
        data-name="Smart Home Layer"
        xmlns="http://www.w3.org/2000/svg"
        width="864.81"
        height="458.45"
        viewBox="0 0 864.81 458.45"
      >
        <defs>
          <linearGradient
            id="house-gradient"
            x1="432"
            y1="100"
            x2="432"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f8f9fa" />
            <stop offset="1" stopColor="#e9ecef" />
          </linearGradient>
          <radialGradient
            id="wifi-signal"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0" stopColor={theme.imageHighlight} stopOpacity="0.8" />
            <stop offset="100" stopColor={theme.imageHighlight} stopOpacity="0.1" />
          </radialGradient>
        </defs>
        
        {/* Ground/Base */}
        <rect x="0" y="300" width="864.81" height="158.45" fill={theme.compImgHighlight} opacity="0.3" />
        <rect x="0" y="380" width="864.81" height="78.45" fill={theme.imageHighlight} opacity="0.2" />
        
        {/* Main House Structure - Flat Roof */}
        <rect x="220" y="100" width="424" height="200" fill="url(#house-gradient)" stroke={theme.text} strokeWidth="2" />
        
        {/* Door */}
        <rect x="400" y="220" width="64" height="80" fill={theme.jacketColor} rx="5" />
        <circle cx="450" cy="260" r="3" fill={theme.imageHighlight} />
        
        {/* Windows */}
        <rect x="260" y="140" width="60" height="60" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" rx="5" />
        <rect x="544" y="140" width="60" height="60" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" rx="5" />
        <line x1="290" y1="140" x2="290" y2="200" stroke={theme.text} strokeWidth="1" />
        <line x1="260" y1="170" x2="320" y2="170" stroke={theme.text} strokeWidth="1" />
        <line x1="574" y1="140" x2="574" y2="200" stroke={theme.text} strokeWidth="1" />
        <line x1="544" y1="170" x2="604" y2="170" stroke={theme.text} strokeWidth="1" />
        
        {/* Garage */}
        <rect x="240" y="220" width="100" height="80" fill={theme.compImgHighlight} stroke={theme.jacketColor} strokeWidth="2" />
        <rect x="250" y="260" width="80" height="2" fill={theme.text} />
        <rect x="250" y="270" width="80" height="2" fill={theme.text} />
        <rect x="250" y="280" width="80" height="2" fill={theme.text} />
        
        {/* Smart Devices on House */}
        
        {/* Smart Doorbell */}
        <rect x="375" y="250" width="12" height="18" fill={theme.dark} rx="2" />
        <circle cx="381" cy="256" r="2" fill={theme.imageHighlight} />
        <circle cx="381" cy="262" r="1" fill={theme.jacketColor} />
        
        {/* Smart Thermostat */}
        <circle cx="500" cy="180" r="15" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" />
        <circle cx="500" cy="180" r="8" fill={theme.imageHighlight} />
        <text x="500" y="185" textAnchor="middle" fontSize="8" fill={theme.text}>72°</text>
        
        {/* Smart Light Switch */}
        <rect x="555" y="250" width="15" height="25" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="1" rx="2" />
        <rect x="558" y="255" width="9" height="6" fill={theme.imageHighlight} rx="1" />
        <rect x="558" y="264" width="9" height="6" fill={theme.jacketColor} rx="1" />
        
        {/* Smart Outlet */}
        <rect x="270" y="270" width="18" height="12" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="1" rx="2" />
        <circle cx="276" cy="276" r="1.5" fill={theme.text} />
        <circle cx="282" cy="276" r="1.5" fill={theme.text} />
        
        {/* WiFi Router (inside house, visible through window) */}
        <rect x="575" y="185" width="20" height="8" fill={theme.dark} />
        <circle cx="580" cy="189" r="1" fill={theme.imageHighlight} />
        <circle cx="585" cy="189" r="1" fill={theme.jacketColor} />
        <circle cx="590" cy="189" r="1" fill={theme.imageHighlight} />
        
        {/* WiFi Signal Waves */}
        <g opacity="0.6">
          <circle cx="585" cy="189" r="30" fill="none" stroke={theme.imageHighlight} strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="585" cy="189" r="50" fill="none" stroke={theme.imageHighlight} strokeWidth="1.5" strokeDasharray="8,8" />
          <circle cx="585" cy="189" r="70" fill="none" stroke={theme.imageHighlight} strokeWidth="1" strokeDasharray="12,12" />
        </g>
        
        {/* Smart Devices Around House */}
        
        {/* Smart Security Camera */}
        <g transform="translate(180, 120)">
          <rect x="0" y="0" width="25" height="15" fill={theme.dark} rx="3" />
          <circle cx="12.5" cy="7.5" r="5" fill={theme.jacketColor} />
          <circle cx="12.5" cy="7.5" r="3" fill={theme.text} />
          <rect x="8" y="15" width="9" height="8" fill={theme.jacketColor} />
          <line x1="12.5" y1="7.5" x2="30" y2="0" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.7" />
        </g>
        
        {/* Smart Mailbox */}
        <g transform="translate(680, 230)">
          <rect x="0" y="0" width="30" height="40" fill={theme.jacketColor} rx="5" />
          <rect x="2" y="15" width="26" height="2" fill={theme.imageHighlight} />
          <circle cx="25" cy="10" r="2" fill={theme.imageHighlight} />
          <rect x="5" y="45" width="6" height="25" fill={theme.jacketColor} />
          <rect x="16" y="45" width="6" height="25" fill={theme.jacketColor} />
        </g>
        
        {/* Smart Sprinkler System */}
        <g transform="translate(120, 280)">
          <rect x="0" y="0" width="8" height="20" fill={theme.imageHighlight} />
          <circle cx="4" cy="0" r="6" fill={theme.imageHighlight} />
          <path d="M-8,-6 Q4,-12 16,-6" fill="none" stroke={theme.compImgHighlight} strokeWidth="1" opacity="0.7" />
          <path d="M-6,-8 Q4,-14 14,-8" fill="none" stroke={theme.compImgHighlight} strokeWidth="1" opacity="0.5" />
          <path d="M-4,-10 Q4,-16 12,-10" fill="none" stroke={theme.compImgHighlight} strokeWidth="1" opacity="0.3" />
        </g>
        
        {/* Smart Garden Lights */}
        <g transform="translate(750, 260)">
          <rect x="0" y="0" width="4" height="30" fill={theme.text} />
          <circle cx="2" cy="0" r="8" fill={theme.imageHighlight} opacity="0.8" />
          <circle cx="2" cy="0" r="15" fill={theme.imageHighlight} opacity="0.3" />
        </g>
        
        <g transform="translate(100, 250)">
          <rect x="0" y="0" width="4" height="35" fill={theme.text} />
          <circle cx="2" cy="0" r="8" fill={theme.imageHighlight} opacity="0.8" />
          <circle cx="2" cy="0" r="15" fill={theme.imageHighlight} opacity="0.3" />
        </g>
        
        {/* Smart Car in Garage */}
        <g transform="translate(250, 245)">
          <ellipse cx="40" cy="25" rx="35" ry="12" fill={theme.imageHighlight} />
          <rect x="10" y="15" width="60" height="15" fill={theme.imageHighlight} rx="7" />
          <circle cx="20" cy="30" r="6" fill={theme.dark} />
          <circle cx="60" cy="30" r="6" fill={theme.dark} />
          <rect x="45" y="10" width="8" height="4" fill={theme.compImgHighlight} />
          <circle cx="15" cy="20" r="1" fill={theme.jacketColor} />
          <circle cx="65" cy="20" r="1" fill={theme.jacketColor} />
        </g>
        
        {/* Smart Home Hub */}
        <g transform="translate(400, 50)">
          <rect x="0" y="0" width="64" height="40" fill={theme.dark} rx="5" />
          <text x="32" y="25" textAnchor="middle" fontSize="12" fill={theme.compImgHighlight} fontWeight="bold">HUB</text>
          <circle cx="10" cy="10" r="2" fill={theme.imageHighlight} />
          <circle cx="20" cy="10" r="2" fill={theme.jacketColor} />
          <circle cx="30" cy="10" r="2" fill={theme.imageHighlight} />
          <circle cx="40" cy="10" r="2" fill={theme.jacketColor} />
          
          {/* Connection lines to various devices */}
          <g opacity="0.4">
            <line x1="32" y1="40" x2="32" y2="80" stroke={theme.imageHighlight} strokeWidth="2" />
            <line x1="32" y1="80" x2="192.5" y2="127.5" stroke={theme.imageHighlight} strokeWidth="1" />
            <line x1="32" y1="80" x2="585" y2="189" stroke={theme.imageHighlight} strokeWidth="1" />
            <line x1="32" y1="80" x2="381" y2="256" stroke={theme.imageHighlight} strokeWidth="1" />
            <line x1="32" y1="80" x2="500" y2="180" stroke={theme.imageHighlight} strokeWidth="1" />
          </g>
        </g>
        
        <title>smarter, not harder</title>
        
        {/* Floating Smart Icons */}
        <g opacity="0.7">
          <g transform="translate(750, 150)">
            <circle cx="0" cy="0" r="12" fill={theme.compImgHighlight} stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">⚡</text>
          </g>
          
          <g transform="translate(100, 200)">
            <circle cx="0" cy="0" r="12" fill={theme.compImgHighlight} stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">🌡️</text>
          </g>
          
          <g transform="translate(800, 300)">
            <circle cx="0" cy="0" r="12" fill={theme.compImgHighlight} stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">💡</text>
          </g>
          
          <g transform="translate(50, 350)">
            <circle cx="0" cy="0" r="12" fill={theme.compImgHighlight} stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">🔒</text>
          </g>
        </g>
      </svg>
    );
  }
}