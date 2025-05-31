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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React",
      progressPercentage: "90%",
    },
    {
      Stack: "NextJs",
      progressPercentage: "70%",
    },
    {
      Stack: "JavaScript",
      progressPercentage: "80%",
    },
    {
      Stack: "TypeScript",
      progressPercentage: "70%",
    },
    {
      Stack: "Redux",
      progressPercentage: "70%",
    },
    {
      Stack: ".Net Core",
      progressPercentage: "70%",
    },
    {
      Stack: "C#",
      progressPercentage: "80%",
    },
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS/SASS",
      progressPercentage: "80%",
    },
    {
      Stack: "NodeJs",
      progressPercentage: "40%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Git",
      progressPercentage: "80%",
    },
    {
      Stack: "Azure Services", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio ", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MS SQL Server", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MySQL", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MongoDB", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/tasin95",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ahsanullah University of Science and Technology",
      subtitle: "B.Sc. in Computer Science and Engineering",
      logo_path: "aust_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "March 2016 - January 2021",
      cgpa: "3.855 / 4.00",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning and Full Stack Development.",
        "⚡ Placed 4th in my class.",
        "⚡ Dean's List.",
        "⚡ I was selected for ITEE Training Program which comprised of 20 students in the CSE department.",
        "⚡ Elected as the team leader in all the group projects.",
      ],
      website_link: "http://aust.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TENCON 2021",
      subtitle: "- Nirmal Nair",
      logo_path: "tencon.png",
      certificate_link:
        "https://drive.google.com/file/d/1wLzB3oGkyI4svn09Yor2sAeSF3DbPzeU/view?usp=sharing",
      alt_name: "New Zealand",
      color_code: "white",
    },
    {
      title: "Python Data Structures",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/259bcebba35c1ba43934608a5fab9907",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    {
      title: "Python Basics",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/39d3749b06308a77e0f596129029d4fe",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },

    {
      title: "React: The Big Picture",
      subtitle: "- Cory House",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qcJipEjDB3YanZor4xHpU_9BC73FuCud/view?usp=sharing",
      alt_name: "Pluralsight",
      color_code: "#000000",
    },
    {
      title: "React: Getting Started",
      subtitle: "- Samer Buna",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1LYzFiq0DDYYiDHowG4nbPjgmjCgd3QiV/view?usp=sharing",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Javascript: Getting Started",
      subtitle: "- Mark Zamoyta",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12qhxMM2DGp4YVdG9wcpFDNX7r1bjqumx/view?usp=sharing",
      alt_name: "Pluralsight",
      color_code: "#000000",
    },
    {
      title: "Designing React Components",
      subtitle: "- Peter Kellner",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12f_pCjrOIkx0SMC0mqjnxpMwc9tesQoC/view?usp=sharing",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Managing React State",
      subtitle: "- Cory House",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12f_pCjrOIkx0SMC0mqjnxpMwc9tesQoC/view?usp=sharing",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Building Applications with React and Redux",
      subtitle: "- Cory House",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15UMAKzJq1g1cIrz-sp1Ve0efg-M-hAq1/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Using React Hooks",
      subtitle: "- Peter Kellner",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15mPlLGrjpmkdlf3eyi7B_NLG8Wro5EEg/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Styling React Component",
      subtitle: "- Jake Trent",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/14Wvag5M1sGzOlgWCC2PPDX4SsUkiqf72/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Testing React Components",
      subtitle: "- Liam McLennan",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1654lPVh6R1zwSjgZjHV9gz7mgQ7wRmLm/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Server Rendering React Components",
      subtitle: "- Daniel Stern",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/14YrLAmZlGNx2PayR0unlLjMoySL-eRG5/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Optimize Performance React",
      subtitle: "- Hendrik Swanepoel",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15kaZAf9642Kp_LBXYeqiVSzInaz-peAi/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Node.js The Big Picture",
      subtitle: "- Paul O'Fallon",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/16jqLAZ4rWiUmITkGGxrZb68Eo5l77UPu/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Node.js Getting Started",
      subtitle: "- Samer Buna",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/173qXhPtqI1zwSzcb487R3Ud_0j13LiDP/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Using MongoDB with Node.js",
      subtitle: "- Samer Buna",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/16za14GrABr8xBM8r8hCtag1fO2faZTD8/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Fullstack Developer with 2+ years of experience working with React, .Net and NodeJs in an agile environment. Experience in leading a 5 member frontend team to achieve concrete goals on a strict deadline in a large scale project consisting over millions of records of drivers all throughout North America.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Fullstack Developer",
          company: "CodeExcel inc.",
          company_url: "https://codeexcel.ca/",
          logo_path: "codeexcel.jpg",
          duration: "January 2021 - PRESENT",
          location: "Markham, ON, Canada (Remote)",
          description:
            "Worked with 2 Insurance Bureau of Canada and Pixelmask Inc. as a Contractor via CodeExcel. Engaged in 5 successful projects utilizing stacks such as: React, .Net Core, MS SQL Server, Azure Cloud Services (AD, B2C, Key Vault, Blob Storage, Front Door etc). The projects are mainly focused towards the North American Insurance Industry.",
          features: [
            "- Led the frontend team that resulted in a 25% increase in sprint completion rate.",
            "- Implemented Single Sign-On (SSO) via Azure B2C across multiple legacy projects, simplifying user experience and reducing account management, resulting in seamless login with company credentials.",
            "- Uncovered critical project vulnerabilities within 2 days of joining the IBC team, enabling timely remediation and preventing potential losses.",
            "- Slashed development cost by 13% by suggesting and building a SCIM v2 compliant API for automatic user provisioning between IDP and application instead of using third party solution.",
            "- Implemented flexible payment gateway module, empowering clients to easily switch gateways, boosting convenience and expanding options.",
            "- Optimized UI performance by 15% and eliminated code redundancy using React's functional components, custom hooks, and Redux.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          features: [],
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tasin.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://miftaulmannan.wordpress.com/projects/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Banani, Dhaka-1212, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/yV1Vkp7L3to9qvKX6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+880 1953699363",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
