/* Change this file to get your personal Porfolio */

import { chosenTheme } from "./theme";

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Triskelion Flagship, LLC (D. Henry Portfolio)",
  description:
    "Bridging the gap between technical delivery and business impact across cloud infrastructure, DevOps workflows, stakeholder engagement, and security.",
  og: {
    title: "Triskelion Flagship, LLC",
    type: "website",
    url: "https://tflagshipllc.com/",
  },
};

//Home Page
const greeting = {
  title: "Devon Henry",
  logo_name: "Triskelion Flagship",
  nickname: "Solutions Engineer",
  subTitle:
    "Bridging the gap between technical delivery and business impact across cloud infrastructure, DevOps workflows, stakeholder engagement, and security.",
  resumeLink:
    "https://drive.google.com/file/d/1yoe2IE9RdymMfn64m8m9AkOMkiOdvBHc/view?usp=sharing",
  githubProfile: "https://github.com/dynamic-stall",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/dynamic-stall",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/henrydevon/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@theblerdcard/",
    fontAwesomeIcon: "fa-tiktok", // Reference https://fontawesome.com/icons/tiktok?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=tiktok
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@TheBlerdCard",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Email",
    link: "mailto:dhenry@tflagshipllc.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/gmail?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    // ---------------------------------------------------------
    // Section 1: Cloud & DevOps Engineering
    // ---------------------------------------------------------
    {
      title: "Cloud & DevOps Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "<div class='bullet-container'><span class='bullet-icon'>⚡</span><span class='bullet-text'>Design secure, scalable infrastructure using cloud hosting platforms and Infrastructure as Code</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚡</span><span class='bullet-text'>Deploy and managing containerized workloads with Docker, Nomad, and Kubernetes</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚡</span><span class='bullet-text'>Implement CI/CD pipelines and automated configuration management with GitHub Actions and Ansible</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚡</span><span class='bullet-text'>Build zero-trust access and secrets management solutions (Vault, Cloudflare)</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚡</span><span class='bullet-text'>Develop monitoring and observability stacks (ELK, AWS CloudWatch, OpenSearch)</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚡</span><span class='bullet-text'>Architect HA deployments with multi-AZ failover, Auto Scaling, and self-healing</span></div>",
      ],
      softwareSkills: [
        {
          skillName: "Version Control",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Infra. as Code",
          fontAwesomeClassname: "simple-icons:terraform",
          style: { color: "#844FBA" },
        },
        {
          skillName: "Configuration Mgt.",
          fontAwesomeClassname: "simple-icons:ansible",
          style: { color: "#EE0000" },
        },
        {
          skillName: "Containerization",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Orchestration",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Secrets Management",
          fontAwesomeClassname: "simple-icons:vault",
          style: { 
            color: chosenTheme.isDark ? "#FFEC6E" : "#E6B800"
          },
        },
        {
          skillName: "System Admin.",
          fontAwesomeClassname: "simple-icons:linux",
          style: { 
            color: chosenTheme.isDark ? "#FFFFFF" : "#000000"
          },
        },
      ],
    },

    // ---------------------------------------------------------
    // Section 2: Solutions Consulting & Strategy
    // ---------------------------------------------------------
    {
      title: "Solutions Consulting & Strategy",
      fileName: "DesignImg",
      skills: [
        "<div class='bullet-container'><span class='bullet-icon'>🧭</span><span class='bullet-text'>Translate business goals into scalable technical roadmaps and proofs-of-concept</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🧭</span><span class='bullet-text'>Facilitate stakeholder alignment through workshops, presentations, and live demos</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🧭</span><span class='bullet-text'>Lead cross-functional knowledge-sharing sessions and technical demos</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🧭</span><span class='bullet-text'>Manage SDLC & Agile processes to accelerate time-to-market for new features</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🧭</span><span class='bullet-text'>Orchestrate go-live supervision and post-deployment support for enterprise clients</span></div>",
      ],
      softwareSkills: [
        {
          skillName: "Stakeholder Engagement",
          fontAwesomeClassname: "simple-icons:slack",
          style: { 
            color: chosenTheme.isDark ? "#36C5F0" : "#4A154B"
          },
        },
        {
          skillName: "Business Analytics",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: { color: "#34A853" },
        },
        {
          skillName: "Solutions Architecture",
          fontAwesomeClassname: "simple-icons:diagramsdotnet",
          style: { color: "#F08705" },
        },
        {
          skillName: "Process Improvement",
          fontAwesomeClassname: "simple-icons:miro",
          style: { 
            color: chosenTheme.isDark ? "#FFF9B6" : "#050038"
          },
        },
        {
          skillName: "Project Management",
          fontAwesomeClassname: "simple-icons:jirasoftware",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Agile",
          fontAwesomeClassname: "simple-icons:scrumalliance",
          style: { 
            color: chosenTheme.isDark ? "#F2BE5E" : "#011D45"
          },
        },
        {
          skillName: "Demos",
          fontAwesomeClassname: "simple-icons:googleclassroom",
          style: { color: "#34A853" },
        },
        {
          skillName: "Technical Writing",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: { color: "#21759B" },
        },
      ],
    },

    // ---------------------------------------------------------
    // Section 3: Lean Tech Enablement & Automation
    // ---------------------------------------------------------
    {
      title: "Lean Tech & Automation",
      fileName: "FullStackImg",
      skills: [
        "<div class='bullet-container'><span class='bullet-icon'>⚙️</span><span class='bullet-text'>Design cost-effective infrastructure and productivity solutions for small teams and remote professionals</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚙️</span><span class='bullet-text'>Build custom automation workflows using Google Apps Script, Bash, and open-source tools</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚙️</span><span class='bullet-text'>Deploy secure NAS and VPN systems for self-hosted storage and remote access needs</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚙️</span><span class='bullet-text'>Enable feature-rich services for home office and small business networks using Docker and Cloudflare</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>⚙️</span><span class='bullet-text'>Streamline server bootstrapping and backup strategies with Ansible and cloud storage services</span></div>",
      ],
      softwareSkills: [
        {
          skillName: "Self-Hosting",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: { color: "#A22846" },
        },
        {
          skillName: "Virtualization",
          fontAwesomeClassname: "simple-icons:proxmox",
          style: { color: "#E57000" },
        },
        {
          skillName: "Network Storage",
          fontAwesomeClassname: "simple-icons:openmediavault",
          style: { color: "#5DACDF" },
        },
        {
          skillName: "Personal Cloud",
          fontAwesomeClassname: "simple-icons:nextcloud",
          style: { color: "#FBBC04" },
        },
        {
          skillName: "Reverse Proxy",
          fontAwesomeClassname: "simple-icons:nginx",
          style: { color: "#009639" },
        },
        {
          skillName: "Cloud Access Gateway",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: { color: "#F38020" },
        },
        {
          skillName: "Peer-to-Peer Access",
          fontAwesomeClassname: "simple-icons:tailscale",
          style: {
            color: chosenTheme.isDark ? "#FFFFFF" : "#242424"
          },
        },
        {
          skillName: "Workflow Automation",
          fontAwesomeClassname: "simple-icons:googleappsscript",
          style: { color: "#4285F4" },
        },
      ],
    },

    // ---------------------------------------------------------
    // Section 4: Security & Governance
    // ---------------------------------------------------------
    {
      title: "Security & Governance",
      fileName: "DataScienceImg",
      skills: [
        "<div class='bullet-container'><span class='bullet-icon'>🛡️</span><span class='bullet-text'>Implement Zero Trust IAM, RBAC policies, and MFA integration across multi-cloud environments</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🛡️</span><span class='bullet-text'>Configure LDAP/AD with certificate-based authentication and SAML/OIDC SSO integration using Keycloak and Okta</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🛡️</span><span class='bullet-text'>Design VPNs, firewall ACLs, and WAF configurations with DDoS mitigation for perimeter defense</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🛡️</span><span class='bullet-text'>Perform vulnerability scans with Nessus and server hardening per NIST and FIPS accreditations</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🛡️</span><span class='bullet-text'>Develop POA&M documentation for business continuity, GRC, and disaster recovery workflows to meet compliance</span></div>",
      ],
      softwareSkills: [
        {
          skillName: "Perimeter Security",
          fontAwesomeClassname: "simple-icons:pfsense",
          style: {
            color: chosenTheme.isDark ? "#FFFFFF" : "#212121"
          },
        },
        {
          skillName: "VPN",
          fontAwesomeClassname: "simple-icons:wireguard",
          style: { color: "#88171A" },
        },
        {
          skillName: "Intrusion Detection",
          fontAwesomeClassname: "simple-icons:snort",
          style: {
            color: chosenTheme.isDark ? "#F6A7AA" : "#C41E3A"
          },
        },
        {
          skillName: "Endpoint Protection",
          fontAwesomeClassname: "simple-icons:mcafee",
          style: { color: "#C01818" },
        },
        {
          skillName: "Access Control (IAM)",
          fontAwesomeClassname: "simple-icons:okta",
          style: { color: "#007DC1" },
        },
        {
          skillName: "Secrets & Password Mgt.",
          fontAwesomeClassname: "simple-icons:keeper",
          style: { color: "#FFC700" },
        },
        {
          skillName: "Log Analytics",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: chosenTheme.isDark ? "#00BFB3" : "#005571"
          },
        },
        {
          skillName: "Security Monitoring",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: { color: "#E6522C" },
        },
      ],
    },

    // ---------------------------------------------------------
    // Section 5: Smart Home Assessment & Setup
    // ---------------------------------------------------------
    {
      title: "Smart Home Design & Setup",
      fileName: "SmartHomeImg",
      skills: [
        "<div class='bullet-container'><span class='bullet-icon'>🏠</span><span class='bullet-text'>Design and deploy smart home ecosystems with Google Assistant or Alexa integration</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🏠</span><span class='bullet-text'>Assist with the safe installation of smart outlets, switches, and thermostats — in coordination with licensed professionals when needed</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🏠</span><span class='bullet-text'>Configure subnetting and VLANs to isolate and optimize smart device communications</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🏠</span><span class='bullet-text'>Integrate smart TVs and streaming devices into centralized control systems</span></div>",
        "<div class='bullet-container'><span class='bullet-icon'>🏠</span><span class='bullet-text'>Advise on device selection, platform compatibility, and ecosystem scalability</span></div>",
      ],
      softwareSkills: [    
        {
          skillName: "Home Automation",
          fontAwesomeClassname: "simple-icons:homeassistant",
          style: { color: "#18BCF2" },
        },
        {
          skillName: "Voice Control Integration",
          fontAwesomeClassname: "simple-icons:googleassistant",
          style: { color: "#4285F4" },
        },
        {
          skillName: "IoT Ecosystem",
          fontAwesomeClassname: "simple-icons:smartthings",
          style: { color: "#15BFFF" },
        },
        {
          skillName: "Smart Networking",
          fontAwesomeClassname: "simple-icons:tplink",
          style: { color: "#4ACBD6" },
        },
        {
          skillName: "Automation Workflows",
          fontAwesomeClassname: "simple-icons:ifttt",
          style: { color: "#000000" },
        },
        {
          skillName: "Smart Lighting",
          fontAwesomeClassname: "simple-icons:philipshue",
          style: { color: "#0065D3" },
        },
        {
          skillName: "Central Hub",
          fontAwesomeClassname: "simple-icons:googlehome",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Streaming",
          fontAwesomeClassname: "simple-icons:roku",
          style: { color: "#662D91" },
        },
      ],
    },
  ],
};

// Education Page
// eslint-disable-next-line no-unused-vars
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Virginia Polytechnic Institute and State University",
      subtitle: "B.S. in Business Management",
      logo_path: "vt_logo.png",
      alt_name: "VA Tech",
      descriptions: [
        "⚡ I studied Business Management with a focus in Hospitality and Tourism while minoring in Psychology.",
        "⚡ I have applied my business analytics skill sets professionally as a consultant, entrepreneur, and even through more technical roles via thought leadership and facilitation.",
      ],
      website_link: "http://vt.edu",
    },
    {
      title: "General Assembly",
      subtitle: "Part-Time Courses in Data Science and Data  Analytics",
      logo_path: "ga_logo.png",
      alt_name: "GA",
      descriptions: [
        "⚡ I studied Data Science and Data Analytics at General Assembly, focusing on Pythonic applications of machine learning and data analysis.",
        "⚡ I have furthered my analytics abilities throughout my career through automating team tracking spreadsheets and adding more robust reporting features.",
        "⚡ I have also taken Python bootcamps on Udemy in order to improve my generalized Python application abilities.",
        "⚡ Extracurricularly, I have improved my Python skills through building various applications from an AI Slack bot to financial management tools.",
      ],
      website_link: "https://www.generalassemb.ly/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Solutions Architect - Associate",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=9532A418C09A90F4C4E0CC3705E2C42FOE831595D07ABB8C7EA0DD4C480A7F79E",
      alt_name: "aws1",
      color_code: chosenTheme.isDark ? "#FFC05CFF" : "#E6A84DFF", // lighter orange for dark, darker for light
    },
    {
      title: "Network+",
      subtitle: "- CompTIA",
      logo_path: "comptia_logo.svg",
      certificate_link:
        "https://www.youracclaim.com/badges/ebd8b10c-3a06-4edd-90b5-e4e280b2a0d5",
      alt_name: "comptia",
      color_code: chosenTheme.isDark ? "#7E7E7EFF" : "#5E5E5EFF", // lighter grey for dark theme, darker for light
    },
    {
      title: "Certified Scrum Master",
      subtitle: "- Scrum Alliance",
      logo_path: "scrum_alliance.svg",
      certificate_link:
        "https://certification.scrumalliance.org/accounts/875481-devon-charles-henry/certifications?",
      alt_name: "scrum",
      color_code: "#1E3A8AFF", // navy blue
    },
    {
      title: "Git and GitHub Bootcamp",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4241213d-4aab-4adf-a5e6-34f5100eda62/",
      alt_name: "udemy1",
      color_code: chosenTheme.isDark ? "#CE90F5FF" : "#6B1F99CC", // lighter purple for dark, darker for light
    },
    {
      title: "Complete Python Bootcamp",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2698df4b-366f-4e18-9316-f88c9a6945af/",
      alt_name: "udemy2",
      color_code: chosenTheme.isDark ? "#CE90F5FF" : "#6B1F99CC", // lighter purple for dark, darker for light
    },
    {
      title: "AWS Partner: Technical Accreditation",
      subtitle: "- AWS Partner Network",
      logo_path: "aws_partner_logo.png",
      certificate_link:
        "https://www.credly.com/badges/5a69529c-65e1-4c4c-ac6d-403e66aafe36?source=linked_in_profile",
      alt_name: "aws2",
      color_code: chosenTheme.isDark ? "#FFC05CFF" : "#E6A84DCC", // lighter orange for dark, darker for light
    },
    {
      title: "Kubernetes Essentials",
      subtitle: "- A Cloud Guru",
      logo_path: "acg.png",
      certificate_link:
        "https://verify.acloud.guru/EDFD8B15EA25",
      alt_name: "acg1",
      color_code: "#330099FF", // dark indigo
    },
    {
      title: "SAFe 4 Practitioner",
      subtitle: "- Scaled Agile, Inc.",
      logo_path: "scaled_agile_logo.png",
      certificate_link:
        "https://scaledagile.com/certification/",
      alt_name: "safe4",
      color_code: "#20B2AAFF", // light sea green
    },
    {
      title: "Certified Cloud Practitioner",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=8455114F519DF416C1A108F5245B0046O8D1BB2BD3A9806FB4E8BB129FFF5F5F0",
      alt_name: "aws3",
      color_code: chosenTheme.isDark ? "#FFC05CFF" : "#E6A84DFF", // lighter orange for dark, darker for light
    },
    {
      title: "IoT-Inc Certified IoT Professional",
      subtitle: "- IoT-Inc",
      logo_path: "iot-inc_logo.png",
      certificate_link:
        "https://www.credential.net/qghx52ba",
      alt_name: "iotinc",
      color_code: chosenTheme.isDark? "#FFE55CFF" : "#E4C514FF", // lighter yellow for dark, darker for light
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience & Volunteership",
  description:
    "Cross-functional IT professional bridging hands-on DevSecOps, hybrid cloud, and SRE practices with client-facing solution design, consulting, and professional services. Skilled at building scalable, secure, and cost-efficient cloud solutions while optimizing performance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Solutions Engineer",
          company: "Triskelion Flagship",
          company_url: "https://www.linkedin.com/company/104111162/",
          logo_path: "tflagship_logo.jpg",
          duration: "May 2023 - Present",
          location: "Plantation, FL (remote)",
          description:
            "Developed end-to-end solutions customized to client needs utilizing various cloud infrastructure and DevOps tools while reducing annual infrastructure costs by implementing open-source alternatives and custom integrations.",
          accomplishments: [
            "Coached clients towards successful implementation through collaborative solution design, technical training sessions, and product demonstration.",
            "Reduced client infrastructure costs by an average of 70% across multiple projects through strategic implementation of tailored solutions, delivering over $15K in estimated savings over 14 months.",
            "Automated over 95% of survey analysis workflow through Google Apps Script integration, allowing personalized quadrant analysis and results summary to be emailed to participants upon survey submission.",
            "Enhanced client security posture by implementing zero-trust access controls, secrets management, and secure remote access solutions using Cloudflare ZTNA and Bitwarden.",
          ],
            color: "#000000",
        },
        {
          title: "DevOps Engineer",
          company: "Amazon Web Services",
          company_url: "https://aws.amazon.com/",
          logo_path: "amazon_web_services_logo.jpg",
          duration: "September 2021 - May 2023",
          location: "Denver, CO (hybrid)",
          description:
            "DevOps Engineer enhancing CI/CD pipeline deployments to AWS services through infrastructure updates while providing technical support and improving data streaming analysis capabilities by building new regions with integrated monitoring solutions.",
          accomplishments: [
            "Improved clients’ data streaming analysis and monitoring capabilities through ownership of new region-building tasks, utilizing Amazon Data Firehose integration with OpenSearch and CloudWatch.",
            "Streamlined AWS account ownership configuration updates by 85% during service transition via custom IAM reporting script using Python, Bash, and AWS CLI commands.",
            "Reduced MTTR by 30% for AWS messaging and streaming services via workflow analysis and troubleshooting efforts.",
            "Automated On-Call tracking spreadsheet, capturing tickets worked, services supported, time of completion, and displaying percentage metrics for each On-Call Engineer.",
          ],
            color: "#0879bf",
        },
        {
          title: "System Administrator",
          company: "TEKsystems",
          company_url: "https://www.teksystems.com",
          logo_path: "teksystems_logo.jpg",
          duration: "September 2019 - August 2021",
          location: "Dulles, VA (on-site)",
          description:
            "Supported Raytheon National Cybersecurity Protection System by maintaining diverse computing infrastructure including Windows Server, Linux hosts, container services, and virtualization environments while strengthening enterprise security through vulnerability scanning and system hardening per DoD RMF standards.",
          accomplishments: [
            "Architected and demonstrated AWS migration proof-of-concept with high availability through multi-AZ deployment and failover routing, exceeding base requirements to enable Auto Scaling and self-healing capabilities.",
            "Established and led knowledge exchange program, consulting with team members to identify skill gaps, delivering targeted VMware ecosystem trainings, and facilitating technical knowledge transfer across organizational boundaries.",
            "Led System Admin team in rapidly enabling secure remote work for 63 users during COVID-19, achieving 100% successful onboarding through SOP documentation and MFA setup support across multiple operating systems.",
            "Improved AWS account security and compliance by implementing and automating IAM reporting script — using AWS CLI, Python, and Bash — capturing AWS account user metrics for active access control and authentication methods.",
          ],
            color: "#9b1578",
        },
        {
          title: "Consultant, DoD Health IT",
          company: "Deloitte Consulting",
          company_url: "https://www2.deloitte.com/us/en/services/consulting.html",
          logo_path: "deloitte_logo.jpg",
          duration: "September 2016 - September 2019",
          location: "Falls Church, VA (on-site)",
          description:
            "Upgraded DHA pathology lab systems for 39 Military Treatment Facilities worldwide, adhering to HIPPA / NIST compliance for EHR and system assets, while communicating progress to various stakeholders.",
          accomplishments: [
            "Traveled on-site to coordinate with military points of contact throughout the course of deployment and provided remote post-rollout sustainment support.",
            "Delivered on 100% of contractual milestones for the DHA program management office while streamlining cybersecurity risk and configuration management tasks.",
            "Standardized network configuration processes for 19 sites and GFE asset management workflows for 108 contractors.",
          ],
            color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Social Media Analyst",
          company: "STEAMd Inc",
          company_url: "https://www.linkedin.com/company/steamd-inc-/",
          logo_path: "steamdinc_logo.jpg",
          duration: "October 2014 - July 2017",
          location: "Brambleton, VA",
          description:
            "I worked primarily in a volunteer capacity for this after-school STEM mentorship program catering to girls in grades 6-12. I mainly focused on WordPress site maintenance, social media outreach (developing and presenting a Social Media Business Plan to organizational stakeholders), and booth management during events and conferences.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "From home office network security enhancements to lightweight NAS solutions, from AI-driven Slack bots to high-availability cloud infrastructure deployments; my projects showcase a blend of innovation, automation, and practicality. Each project reflects my commitment to leveraging technology for real-world impact.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "I like to write about the DevOps or Docker projects I've worked on, my current work, and discuss my latest findings. Sometimes (more privately) I also engage in creative writing exercises...",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "open-source-password-management-1",
      name: "Open-Source Password Management, Part 1: Enhancing Security through Self-Hosted Solutions",
      description: "Published February 2025 on LinkedIn Articles",
      url: "https://www.linkedin.com/pulse/open-source-password-management-part-1-enhancing-security-zq9kc",
      createdAt: "2025-02-10T07:30:00Z",
    },
    {
      id: "open-source-password-management-2",
      name: "Open-Source Password Management, Part 2: Deep-Dive on Security Concepts and Configuration Tips",
      description: "Published February 2025 on LinkedIn Articles",
      url: "https://www.linkedin.com/pulse/open-source-password-management-part-2-deep-dive-ri1ac",
      createdAt: "2025-02-17T07:30:00Z",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get in Touch",
    profile_image_path: "profile_pic.jpeg",
    description:
      "<p>I'm primarily active on LinkedIn and GitHub, but you're also welcome to email me directly (see the Google icon below) or download my contact card further down for future reference.</p>" +
      "<p>I'm open to new project inquiries, strategic collaborations, or full-time opportunities.</p>" +
      "<p>Whether you're a hiring manager in need of a forward-thinking Solutions Engineer, a founder seeking DevOps clarity, or a remote professional looking to upgrade your home office or smart home ecosystem — I'd love to be a part of your vision.</p>",
  },
  blogSection: {
    title: "Blog (coming soon!)",
    subtitle:
      "I like to write about the DevOps or Docker projects I've worked on, my current work, and discuss my latest findings. Sometimes (more privately), I also engage in creative writing exercises...",
    //link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Locale",
    subtitle: "South Florida-Local, Globally Accessible",
    locality: "Fort Lauderdale",
    region: "FL",
    link: "https://poplme.co/hash/aMlV1UAj/1/share",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Business Line",
    subtitle: "(571) 535-4404",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
