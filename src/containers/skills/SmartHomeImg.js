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
        height="658.45"
        viewBox="0 0 864.81 658.45"
      >
        <defs>
          <linearGradient
            id="house-gradient"
            x1="432"
            y1="100"
            x2="432"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f8f9fa" />
            <stop offset="1" stopColor="#e9ecef" />
          </linearGradient>
          <linearGradient
            id="roof-gradient"
            x1="432"
            y1="50"
            x2="432"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#495057" />
            <stop offset="1" stopColor="#6c757d" />
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
        <rect x="0" y="500" width="864.81" height="158.45" fill="#28a745" opacity="0.1" />
        <rect x="0" y="580" width="864.81" height="78.45" fill="#198754" opacity="0.1" />
        
        {/* Main House Structure */}
        <path
          d="M200 450 L432 200 L664 450 L664 500 L200 500 Z"
          fill="url(#roof-gradient)"
        />
        <rect x="220" y="300" width="424" height="200" fill="url(#house-gradient)" stroke="#dee2e6" strokeWidth="2" />
        
        {/* Door */}
        <rect x="400" y="420" width="64" height="80" fill="#6c757d" rx="5" />
        <circle cx="450" cy="460" r="3" fill="#ffc107" />
        
        {/* Windows */}
        <rect x="260" y="340" width="60" height="60" fill="#87ceeb" stroke="#495057" strokeWidth="2" rx="5" />
        <rect x="544" y="340" width="60" height="60" fill="#87ceeb" stroke="#495057" strokeWidth="2" rx="5" />
        <line x1="290" y1="340" x2="290" y2="400" stroke="#495057" strokeWidth="1" />
        <line x1="260" y1="370" x2="320" y2="370" stroke="#495057" strokeWidth="1" />
        <line x1="574" y1="340" x2="574" y2="400" stroke="#495057" strokeWidth="1" />
        <line x1="544" y1="370" x2="604" y2="370" stroke="#495057" strokeWidth="1" />
        
        {/* Garage */}
        <rect x="240" y="420" width="100" height="80" fill="#adb5bd" stroke="#6c757d" strokeWidth="2" />
        <rect x="250" y="460" width="80" height="2" fill="#495057" />
        <rect x="250" y="470" width="80" height="2" fill="#495057" />
        <rect x="250" y="480" width="80" height="2" fill="#495057" />
        
        {/* Smart Devices on House */}
        
        {/* Smart Doorbell */}
        <rect x="375" y="450" width="12" height="18" fill="#343a40" rx="2" />
        <circle cx="381" cy="456" r="2" fill="#dc3545" />
        <circle cx="381" cy="462" r="1" fill="#ffc107" />
        
        {/* Smart Thermostat */}
        <circle cx="500" cy="380" r="15" fill="#fff" stroke="#495057" strokeWidth="2" />
        <circle cx="500" cy="380" r="8" fill={theme.imageHighlight} />
        <text x="500" y="385" textAnchor="middle" fontSize="8" fill="#fff">72°</text>
        
        {/* Smart Light Switch */}
        <rect x="555" y="450" width="15" height="25" fill="#fff" stroke="#495057" strokeWidth="1" rx="2" />
        <rect x="558" y="455" width="9" height="6" fill={theme.imageHighlight} rx="1" />
        <rect x="558" y="464" width="9" height="6" fill="#e9ecef" rx="1" />
        
        {/* Smart Outlet */}
        <rect x="270" y="470" width="18" height="12" fill="#fff" stroke="#495057" strokeWidth="1" rx="2" />
        <circle cx="276" cy="476" r="1.5" fill="#495057" />
        <circle cx="282" cy="476" r="1.5" fill="#495057" />
        
        {/* WiFi Router (inside house, visible through window) */}
        <rect x="575" y="385" width="20" height="8" fill="#343a40" />
        <circle cx="580" cy="389" r="1" fill="#28a745" />
        <circle cx="585" cy="389" r="1" fill="#ffc107" />
        <circle cx="590" cy="389" r="1" fill="#28a745" />
        
        {/* WiFi Signal Waves */}
        <g opacity="0.6">
          <circle cx="585" cy="389" r="30" fill="none" stroke={theme.imageHighlight} strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="585" cy="389" r="50" fill="none" stroke={theme.imageHighlight} strokeWidth="1.5" strokeDasharray="8,8" />
          <circle cx="585" cy="389" r="70" fill="none" stroke={theme.imageHighlight} strokeWidth="1" strokeDasharray="12,12" />
        </g>
        
        {/* Smart Devices Around House */}
        
        {/* Smart Security Camera */}
        <g transform="translate(180, 320)">
          <rect x="0" y="0" width="25" height="15" fill="#343a40" rx="3" />
          <circle cx="12.5" cy="7.5" r="5" fill="#495057" />
          <circle cx="12.5" cy="7.5" r="3" fill="#000" />
          <rect x="8" y="15" width="9" height="8" fill="#6c757d" />
          <line x1="12.5" y1="7.5" x2="30" y2="0" stroke={theme.imageHighlight} strokeWidth="2" opacity="0.7" />
        </g>
        
        {/* Smart Mailbox */}
        <g transform="translate(680, 430)">
          <rect x="0" y="0" width="30" height="40" fill="#495057" rx="5" />
          <rect x="2" y="15" width="26" height="2" fill="#ffc107" />
          <circle cx="25" cy="10" r="2" fill="#dc3545" />
          <rect x="5" y="45" width="6" height="25" fill="#6c757d" />
          <rect x="16" y="45" width="6" height="25" fill="#6c757d" />
        </g>
        
        {/* Smart Sprinkler System */}
        <g transform="translate(120, 480)">
          <rect x="0" y="0" width="8" height="20" fill="#28a745" />
          <circle cx="4" cy="0" r="6" fill="#198754" />
          <path d="M-8,-6 Q4,-12 16,-6" fill="none" stroke="#87ceeb" strokeWidth="1" opacity="0.7" />
          <path d="M-6,-8 Q4,-14 14,-8" fill="none" stroke="#87ceeb" strokeWidth="1" opacity="0.5" />
          <path d="M-4,-10 Q4,-16 12,-10" fill="none" stroke="#87ceeb" strokeWidth="1" opacity="0.3" />
        </g>
        
        {/* Smart Garden Lights */}
        <g transform="translate(750, 460)">
          <rect x="0" y="0" width="4" height="30" fill="#495057" />
          <circle cx="2" cy="0" r="8" fill="#ffc107" opacity="0.8" />
          <circle cx="2" cy="0" r="15" fill="#ffc107" opacity="0.3" />
        </g>
        
        <g transform="translate(100, 450)">
          <rect x="0" y="0" width="4" height="35" fill="#495057" />
          <circle cx="2" cy="0" r="8" fill="#ffc107" opacity="0.8" />
          <circle cx="2" cy="0" r="15" fill="#ffc107" opacity="0.3" />
        </g>
        
        {/* Smart Car in Garage */}
        <g transform="translate(250, 445)">
          <ellipse cx="40" cy="25" rx="35" ry="12" fill="#007bff" />
          <rect x="10" y="15" width="60" height="15" fill="#007bff" rx="7" />
          <circle cx="20" cy="30" r="6" fill="#343a40" />
          <circle cx="60" cy="30" r="6" fill="#343a40" />
          <rect x="45" y="10" width="8" height="4" fill="#87ceeb" />
          <circle cx="15" cy="20" r="1" fill="#ffc107" />
          <circle cx="65" cy="20" r="1" fill="#dc3545" />
        </g>
        
        {/* Network Subnet Visualization */}
        <g transform="translate(50, 50)" opacity="0.8">
          <rect x="0" y="0" width="200" height="120" fill="none" stroke={theme.imageHighlight} strokeWidth="2" strokeDasharray="10,5" rx="10" />
          <text x="10" y="20" fontSize="12" fill={theme.imageHighlight} fontWeight="bold">Google Assistant Subnet</text>
          <text x="10" y="35" fontSize="10" fill="#6c757d">192.168.1.0/24</text>
          
          {/* Device Icons in Subnet */}
          <g transform="translate(20, 50)">
            <circle cx="0" cy="0" r="8" fill={theme.imageHighlight} />
            <text x="0" y="3" textAnchor="middle" fontSize="8" fill="#fff">📱</text>
            <text x="0" y="20" fontSize="8" textAnchor="middle" fill="#6c757d">Phone</text>
          </g>
          
          <g transform="translate(70, 50)">
            <circle cx="0" cy="0" r="8" fill={theme.imageHighlight} />
            <text x="0" y="3" textAnchor="middle" fontSize="8" fill="#fff">🏠</text>
            <text x="0" y="20" fontSize="8" textAnchor="middle" fill="#6c757d">Home</text>
          </g>
          
          <g transform="translate(120, 50)">
            <circle cx="0" cy="0" r="8" fill={theme.imageHighlight} />
            <text x="0" y="3" textAnchor="middle" fontSize="8" fill="#fff">📺</text>
            <text x="0" y="20" fontSize="8" textAnchor="middle" fill="#6c757d">Cast</text>
          </g>
          
          <g transform="translate(170, 50)">
            <circle cx="0" cy="0" r="8" fill={theme.imageHighlight} />
            <text x="0" y="3" textAnchor="middle" fontSize="8" fill="#fff">🔊</text>
            <text x="0" y="20" fontSize="8" textAnchor="middle" fill="#6c757d">Speaker</text>
          </g>
          
          {/* Connection Lines */}
          <line x1="20" y1="50" x2="70" y2="50" stroke={theme.imageHighlight} strokeWidth="1" opacity="0.5" />
          <line x1="70" y1="50" x2="120" y2="50" stroke={theme.imageHighlight} strokeWidth="1" opacity="0.5" />
          <line x1="120" y1="50" x2="170" y2="50" stroke={theme.imageHighlight} strokeWidth="1" opacity="0.5" />
        </g>
        
        {/* Smart Home Hub */}
        <g transform="translate(400, 100)">
          <rect x="0" y="0" width="64" height="40" fill="#343a40" rx="5" />
          <text x="32" y="25" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">HUB</text>
          <circle cx="10" cy="10" r="2" fill="#28a745" />
          <circle cx="20" cy="10" r="2" fill="#ffc107" />
          <circle cx="30" cy="10" r="2" fill="#007bff" />
          <circle cx="40" cy="10" r="2" fill="#dc3545" />
          
          {/* Connection lines to various devices */}
          <g opacity="0.4">
            <line x1="32" y1="40" x2="32" y2="80" stroke={theme.imageHighlight} strokeWidth="2" />
            <line x1="32" y1="80" x2="100" y2="280" stroke={theme.imageHighlight} strokeWidth="1" />
            <line x1="32" y1="80" x2="185" y2="389" stroke={theme.imageHighlight} strokeWidth="1" />
            <line x1="32" y1="80" x2="381" y2="456" stroke={theme.imageHighlight} strokeWidth="1" />
            <line x1="32" y1="80" x2="500" y2="380" stroke={theme.imageHighlight} strokeWidth="1" />
          </g>
        </g>
        
        {/* Title */}
        <text x="432" y="600" textAnchor="middle" fontSize="18" fill="#495057" fontWeight="bold">Smart Home Ecosystem</text>
        
        {/* Floating Smart Icons */}
        <g opacity="0.7">
          <g transform="translate(750, 150)">
            <circle cx="0" cy="0" r="12" fill="#fff" stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">⚡</text>
          </g>
          
          <g transform="translate(100, 200)">
            <circle cx="0" cy="0" r="12" fill="#fff" stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">🌡️</text>
          </g>
          
          <g transform="translate(800, 300)">
            <circle cx="0" cy="0" r="12" fill="#fff" stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">💡</text>
          </g>
          
          <g transform="translate(50, 350)">
            <circle cx="0" cy="0" r="12" fill="#fff" stroke={theme.imageHighlight} strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fontSize="12">🔒</text>
          </g>
        </g>
      </svg>
    );
  }
}