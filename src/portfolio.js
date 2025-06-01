// Website related settings
const settings = {
  isSplash: true,
};

//Home Page
const greeting = {
  title: "Devon Henry",
  logo_name: "Triskelion Flagship, LLC",
  nickname: null,
  subTitle:
    "Solutions Engineer bridging the gap between technical delivery and business impact across cloud infrastructure, DevOps workflows, stakeholder engagement, and security.",
  resumeLink:
    "https://drive.google.com/file/d/1WruY_Jw7ByUJSvdBPUin4V9Lr-E_s2CZ/view?usp=sharing",
  portfolio_repository: "https://github.com/dynamic-stall",
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
    name: "YouTube",
    link:
      "https://www.youtube.com/@theblerdcard",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Email",
    link:
      "mailto:dhenry@tflagshipllc.com?subject=Portfolio Inquiry&body=Hello",
    fontAwesomeIcon: "fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  //{
    //name: "Facebook",
    //link: "https://www.facebook.com/tasinmiftaulmannan",
    //fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    //backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  //},
  //{
    //name: "Instagram",
    //link: "https://www.instagram.com/mm_tasin/",
    //fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    //backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  //},
];

const skills = {
  data: [
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudDevOpsImg",
      skills: [
        "⚡ Architecting scalable cloud solutions on AWS and GCP with 70% average cost reduction",
        "⚡ Building Infrastructure-as-Code with Terraform modules and Ansible automation",
        "⚡ Implementing CI/CD pipelines with GitHub Actions and container orchestration",
        "⚡ Designing high-availability multi-AZ deployments with auto-scaling and failover routing",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "devicon:terraform",
          style: {
            color: "#623CE4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "devicon:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "devicon:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "devicon:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "devicon:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "Security & Compliance",
      fileName: "SecurityImg",
      skills: [
        "⚡ Implementing Zero Trust Network Access with Cloudflare Gateway and tunnel solutions",
        "⚡ Designing secure authentication flows with SSO, MFA, and IAM best practices",
        "⚡ Building self-hosted security stack including Suricata NIPS and Vaultwarden password management",
        "⚡ Ensuring DoD RMF compliance and HIPAA standards across enterprise deployments",
      ],
      softwareSkills: [
        {
          skillName: "Cloudflare",
          fontAwesomeClassname: "devicon:cloudflare",
          style: {
            color: "#F38020",
          },
        },
        {
          skillName: "WireGuard",
          fontAwesomeClassname: "simple-icons:wireguard",
          style: {
            color: "#88171A",
          },
        },
        {
          skillName: "Keycloak",
          fontAwesomeClassname: "simple-icons:keycloak",
          style: {
            color: "#4D4D4D",
          },
        },
        {
          skillName: "Bitwarden",
          fontAwesomeClassname: "simple-icons:bitwarden",
          style: {
            color: "#175DDC",
          },
        },
        {
          skillName: "OpenLDAP",
          fontAwesomeClassname: "simple-icons:openldap",
          style: {
            color: "#4A90E2",
          },
        },
        {
          skillName: "VMware",
          fontAwesomeClassname: "devicon:vmware",
          style: {
            color: "#607078",
          },
        },
      ],
    },
    {
      title: "Solutions Engineering & Consulting",
      fileName: "ConsultingImg",
      skills: [
        "⚡ Delivering client-focused solution design and technical demos for pre-sales engagements",
        "⚡ Leading global site surveys and deployments across 39+ military facilities worldwide",
        "⚡ Creating comprehensive technical documentation, SOPs, and knowledge transfer programs",
        "⚡ Building proof-of-concept demonstrations with live infrastructure and automated workflows",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "devicon:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Google Apps Script",
          fontAwesomeClassname: "devicon:google",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Nextcloud",
          fontAwesomeClassname: "simple-icons:nextcloud",
          style: {
            color: "#0082C9",
          },
        },
        {
          skillName: "DokuWiki",
          fontAwesomeClassname: "simple-icons:dokuwiki",
          style: {
            color: "#FF7700",
          },
        },
      ],
    },
    {
      title: "Automation & AI Integration",
      fileName: "AutomationImg",
      skills: [
        "⚡ Automating 95% of survey analysis workflows through API integration and scripting",
        "⚡ Building context-aware AI Slack bots for operational efficiency and team productivity",
        "⚡ Implementing automated security updates with Cloudflare Gateway and GitHub Actions",
        "⚡ Creating self-healing infrastructure with monitoring, alerting, and automated remediation",
      ],
      softwareSkills: [
        {
          skillName: "Google Gemini",
          fontAwesomeClassname: "simple-icons:google",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "devicon:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "Slack API",
          fontAwesomeClassname: "devicon:slack",
          style: {
            color: "#4A154B",
          },
        },
        {
          skillName: "OpenMediaVault",
          fontAwesomeClassname: "simple-icons:openmediavault",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "HashiCorp Vault",
          fontAwesomeClassname: "devicon:vault",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Suricata",
          fontAwesomeClassname: "simple-icons:suricata",
          style: {
            color: "#FF6600",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "CI/CD",
      progressPercentage: "90%",
    },
    {
      Stack: "Source Control Management",
      progressPercentage: "70%",
    },
    {
      Stack: "Observability",
      progressPercentage: "65%",
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "55%",
    },
    {
      Stack: "Backend",
      progressPercentage: "40%",
    },
    {
      Stack: "Programming",
      progressPercentage: "40%",
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "35%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python",
      progressPercentage: "50%",
    },
    {
      Stack: "JavaScript",
      progressPercentage: "45%",
    },
    {
      Stack: "YAML",
      progressPercentage: "70%",
    },
    {
      Stack: "JSON",
      progressPercentage: "60%",
    },
    {
      Stack: "HCL",
      progressPercentage: "60%",
    },
    {
      Stack: "Bash",
      progressPercentage: "70%",
    },
    {
      Stack: "PowerShell",
      progressPercentage: "30%",
    },
    {
      Stack: "SQL",
      progressPercentage: "30%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Git",
      progressPercentage: "80%",
    },
    {
      Stack: "Amazon Web Services",
      progressPercentage: "80%",
    },
    {
      Stack: "Docker",
      progressPercentage: "70%",
    },
    {
      Stack: "Visual Studio Code",
      progressPercentage: "65%",
    },
    {
      Stack: "GitHub",
      progressPercentage: "80%",
    },
    {
      Stack: "Terraform",
      progressPercentage: "50%",
    },
    {
      Stack: "Kubernetes",
      progressPercentage: "35%",
    },
    {
      Stack: "MySQL / PostgreSQL",
      progressPercentage: "30%",
    },
    {
      Stack: "Google Cloud Platform",
      progressPercentage: "50%",
    },
  ],
};

// Education page
const degrees = {
  degrees: [
    {
      title: "Virginia Polytechnic Institute and State University",
      subtitle: "B.S. in Business Management",
      logo_path: "aust_logo.png",
      alt_name: "VA Tech",
      duration: "September 2010 - May 2014",
      website_link: "http://vt.edu/",
    },
    {
      title: "General Assembly",
      subtitle: "Data Science Part-Time Course",
      logo_path: "aust_logo.png",
      alt_name: "GA",
      duration: "November 2020 - March 2021",
      website_link: "http://generalassemb.ly/",
    },
    {
      title: "General Assembly",
      subtitle: "Data Analytics Part-Time Course",
      logo_path: "aust_logo.png",
      alt_name: "GA",
      duration: "May 2017 - August 2017",
      website_link: "http://generalassemb.ly/",
    },
  ],
};

// Certifications page
const certifications = {
  certifications: [
    {
      title: "AWS Solutions Architect - Associate",
      logo_path: "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1754524800&v=beta&t=ukKj1jzchfD-BM6SVNEP7OIu9uXuhiCPIGyC1qj0eiU",
      certificate_link:
        "https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=9532A418C09A90F4C4E0CC3705E2C42FOE831595D07ABB8C7EA0DD4C480A7F79E",
      color_code: "white",
    },
    {
      title: "CompTIA Network+",
      logo_path: "https://media.licdn.com/dms/image/v2/D4D0BAQFgU-Mnk-gZnA/company-logo_100_100/company-logo_100_100/0/1728580001287/comptia_logo?e=1754524800&v=beta&t=nU6BXOF9FpLPD5GWa2JoS8yZ_cnPYYtHakjNNJh0WQ4",
      certificate_link:
        "https://www.youracclaim.com/badges/ebd8b10c-3a06-4edd-90b5-e4e280b2a0d5",
      color_code: "white",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      logo_path: "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1754524800&v=beta&t=ukKj1jzchfD-BM6SVNEP7OIu9uXuhiCPIGyC1qj0eiU",
      certificate_link:
        "https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=8455114F519DF416C1A108F5245B0046O8D1BB2BD3A9806FB4E8BB129FFF5F5F0",
      color_code: "white",
    },
    {
      title: "AWS Partner Accreditation",
      logo_path: "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1754524800&v=beta&t=ukKj1jzchfD-BM6SVNEP7OIu9uXuhiCPIGyC1qj0eiU",
      certificate_link:
        "https://www.credly.com/badges/5a69529c-65e1-4c4c-ac6d-403e66aafe36?source=linked_in_profile",
      color_code: "white",
    },
    {
      title: "Certified Scrum Master",
      logo_path: "https://media.licdn.com/dms/image/v2/D560BAQFdepbfdMhg3g/company-logo_100_100/company-logo_100_100/0/1719256430021/scrum_alliance_logo?e=1754524800&v=beta&t=JJHgVkAnrLAm9k0sZRkCU3r06lUrL3zl6yiX6xaHY-4",
      certificate_link:
        "https://certification.scrumalliance.org/accounts/875481-devon-charles-henry/certifications?",
      color_code: "white",
    },
    {
      title: "IoT-Inc Certified IoT Professional",
      logo_path: "https://media.licdn.com/dms/image/v2/C560BAQFa2PLzNlzWRw/company-logo_100_100/company-logo_100_100/0/1630600418618/iot_inc_logo?e=1754524800&v=beta&t=plYuxkhZvAiTq60zjjp-svDdpbLrndUyY65ur5spys0",
      certificate_link:
        "https://www.credential.net/qghx52ba",
      color_code: "white",
    },
    {
      title: "SAFe 4 Practitioner",
      logo_path: "https://media.licdn.com/dms/image/v2/C560BAQFti5SCrDfBWA/company-logo_100_100/company-logo_100_100/0/1668017355052/scaled_agile_inc__logo?e=1754524800&v=beta&t=HEu7Jam8OhMuJc6P9AXoRvfP-JdKNdsuID6En4bCPDw",
      color_code: "white",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Cross-functional IT professional bridging hands-on DevSecOps, hybrid cloud, and SRE practices with client-facing solution design, consulting, and professional services. Skilled at building scalable, secure, and cost-efficient cloud solutions while optimizing performance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "DevOps / Site Reliability Engineer",
          company: "Amazon Web Services",
          company_url: "https://www.aboutamazon.com/",
          logo_path: "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1754524800&v=beta&t=ukKj1jzchfD-BM6SVNEP7OIu9uXuhiCPIGyC1qj0eiU",
          duration: "September 2021 - May 2023",
          location: "Denver, CO (Hybrid)",
          description:
            "DevOps Engineer enhancing CI/CD pipeline deployments to AWS services through infrastructure updates while providing technical support and improving data streaming analysis capabilities by building new regions with integrated monitoring solutions.",
          accomplishments: [
            "- Improved clients’ data streaming analysis and monitoring capabilities through ownership of new region-building tasks, utilizing Amazon Data Firehose integration with OpenSearch and CloudWatch.",
            "- Streamlined AWS account ownership configuration updates by 85% during service transition via custom IAM reporting script using Python, Bash, and AWS CLI commands.",
            "- Reduced MTTR by 30% for AWS messaging and streaming services via workflow analysis and troubleshooting efforts.",
            "- Automated On-Call tracking spreadsheet, capturing tickets worked, services supported, time of completion, and displaying percentage metrics for each On-Call Engineer.",
          ],
          color: "#0879bf",
        },
        {
          title: "Systems Administrator",
          company: "TEKsystems (Raytheon Company)",
          company_url: "https://www.teksystems.com/en/",
          logo_path: "https://media.licdn.com/dms/image/v2/D4D0BAQEGWkPukExqDw/company-logo_100_100/company-logo_100_100/0/1737653799738/teksystems_logo?e=1754524800&v=beta&t=D6Rcw6mpZHn3VuJAdEYbBFJRk-suUNX86Q6HWY9yfnA",
          duration: "September 2019 - August 2021",
          location: "Dulles, VA (On-Site)",
          description:
            "Maintained Windows Server infrastructure, Red Hat Enterprise Linux hosts, Docker microservices, Kubernetes clusters, and VMware Horizon resource pools in support of Raytheon's DoD National Cybersecurity Protection System (NCPS) contract.",
          accomplishments: [
            "- Architected and demonstrated AWS migration proof-of-concept with high availability through multi-AZ deployment and failover routing, exceeding base requirements to enable Auto Scaling and self-healing capabilities.",
            "- Established and led knowledge exchange program, consulting with team members to identify skill gaps, delivering targeted VMware ecosystem trainings, and facilitating technical knowledge transfer across organizational boundaries.",
            "- Led System Admin team in rapidly enabling secure remote work for 63 users during COVID-19, achieving 100% successful onboarding through SOP documentation and MFA setup support across multiple operating systems.",
            "- Improved AWS account security and compliance by implementing and automating IAM reporting script — using AWS CLI, Python, and Bash — capturing AWS account user metrics for active access control and authentication methods.",
          ],
          color: "#0879bf",
        },
        {
          title: "Consultant, DoD Healthcare IT",
          company: "Deloitte Consulting",
          company_url: "https://www2.deloitte.com/us/en/services/consulting.html",
          logo_path: "https://media.licdn.com/dms/image/v2/C560BAQGNtpblgQpJoQ/company-logo_100_100/company-logo_100_100/0/1662120928214/deloitte_logo?e=1754524800&v=beta&t=NZq6iAq5j7VXSEUT5AouHpIUoQS7TlJKjRJ7mHxaahM",
          duration: "September 2016 - September 2019",
          location: "Falls Church, VA (On-Site)",
          description:
            "Upgraded DHA pathology lab systems for 39 Military Treatment Facilities worldwide, adhering to HIPPA / NIST compliance for EHR and system assets, while communicating progress to various stakeholders.",
          accomplishments: [
            "- Traveled on-site to coordinate with military points of contact throughout the course of deployment and provided remote post-rollout sustainment support.",
            "- Delivered on 100% of contractual milestones for the DHA program management office while streamlining cybersecurity risk and configuration management tasks.",
            "- Standardized network configuration processes for 19 sites and GFE asset management workflows for 108 contractors.",
          ],
          color: "#0879bf",
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
          logo_path: "https://media.licdn.com/dms/image/v2/C4D0BAQG9ygTI9uy0JA/company-logo_100_100/company-logo_100_100/0/1631327183880?e=1754524800&v=beta&t=fwX1p3X9alj0MKKb6p9IT4G14v-NdU79mensvFziCtI",
          duration: "October 2014 - July 2017",
          location: "Brambleton, VA",
          description:
            "I worked primarily in a volunteer capacity for this after-school STEM mentorship program catering to girls in grades 3-12. I primarily focused on WordPress site maintenance, social media outreach (developing and presenting a Social Media Business Plan to organizational stakeholders), and booth management during events and conferences.",
          //accomplishments: [],
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

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tasin.png",
    description:
      "I am primiarily on LinkedIn and GitHub. You can also reach me via email at dhenry@tflagshipllc.com. I am open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the DevOps or Docker projects I've worked on, my current work, and discuss my latest findings. Sometimes, more privately, I engage in creative writing exercises.",
    link: "https://www.linkedin.com/pulse/open-source-password-management-part-1-enhancing-security-zq9kc",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Fort Lauderdale, FL",
    avatar_image_path: "address_image.svg",
    //location_map_link: "https://goo.gl/maps/yV1Vkp7L3to9qvKX6",
  },
  //phoneSection: {
    //title: "Phone Number",
    //subtitle: "123-456-7890",
  //},
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
