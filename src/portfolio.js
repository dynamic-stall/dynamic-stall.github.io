/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Devon Henry's Portfolio",
  description:
    "Solutions Engineer bridging the gap between technical delivery and business impact across cloud infrastructure, DevOps workflows, stakeholder engagement, and security.",
  og: {
    title: "Triskelion Flagship, LLC",
    type: "website",
    url: "http://tflagshipllc.com/",
  },
};

//Home Page
const greeting = {
  title: "Devon Henry",
  logo_name: "henrydevon",
  nickname: "Solutions Engineer",
  subTitle:
    "Solutions Engineer bridging the gap between technical delivery and business impact across cloud infrastructure, DevOps workflows, stakeholder engagement, and security.",
  resumeLink:
    "https://drive.google.com/file/d/1WruY_Jw7ByUJSvdBPUin4V9Lr-E_s2CZ/view?usp=sharing",
  githubProfile: "https://github.com/dynamic-stall",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/dynamic-stall",
  // linkedin: "https://www.linkedin.com/in/henrydevon/",
  // email: "dhenry@tflagshipllc.com",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // youtube: "https://www.youtube.com/@TheBlerdCard",
  // tiktok: "https://www.tiktok.com/theblerdcard/"

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
    link: "https://www.youtube.com/@TheBlerdCard",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Email",
    link: "mailto:dhenry@tflagshipllc.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/theblerdcard/",
    fontAwesomeIcon: "fa-tiktok", // Reference https://fontawesome.com/icons/tiktok?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=tiktok
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
        "⚡ Designing secure, scalable infrastructure using AWS, Terraform, and Ansible",
        "⚡ Deploying and managing containerized workloads with Docker, Nomad, and Kubernetes",
        "⚡ Implementing CI/CD pipelines and automation with GitHub Actions and Ansible",
        "⚡ Building zero-trust access and secrets management solutions (Vault, Cloudflare)",
        "⚡ Developing monitoring and observability stacks (ELK, CloudWatch, OpenSearch)",
        "⚡ Architecting HA deployments with multi-AZ failover, Auto Scaling, and self-healing",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "aws_logo.png",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "gcp_logo_1.png",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "hcp_terraform_logo.png",
          style: { color: "#623CE4" },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: { color: "#EE0000" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "HashiCorp Nomad",
          imageSrc: "hcp_nomad_logo.png",
        },
        {
          skillName: "HashiCorp Vault",
          imageSrc: "hcp_vault_logo_yellow.png",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
      ],
    },

    // ---------------------------------------------------------
    // Section 2: Security & Governance
    // ---------------------------------------------------------
    {
      title: "Security & Governance",
      fileName: "SecurityImg",
      skills: [
        "⚡ Conducting risk analysis and incident response readiness assessments",
        "⚡ Implementing IAM, policies, and role-based access control for cloud environments",
        "⚡ Designing IPsec VPNs, firewalls, and WAF configurations for perimeter security",
        "⚡ Performing server hardening and vulnerability scans with Nessus and RHEL best practices",
        "⚡ Establishing data security, GRC, and disaster recovery workflows to meet compliance",
      ],
      softwareSkills: [
        {
          skillName: "Nessus",
          imageSrc: "nessus-logo.png",
        },
        {
          skillName: "IPsec",
          fontAwesomeClassname: "fas fa-lock",
          style: { color: "#1976D2" },
        },
        {
          skillName: "Firewall / WAF",
          fontAwesomeClassname: "fas fa-shield-alt",
          style: { color: "#C62828" },
        },
        {
          skillName: "IAM",
          fontAwesomeClassname: "fas fa-user-shield",
          style: { color: "#2E7D32" },
        },
        {
          skillName: "ELK Stack",
          fontAwesomeClassname: "simple-icons:elastic",
          style: { color: "#005571" },
        },
        {
          skillName: "GRC",
          fontAwesomeClassname: "fas fa-gavel",
          style: { color: "#6A1B9A" },
        },
        {
          skillName: "Disaster Recovery",
          fontAwesomeClassname: "fas fa-umbrella",
          style: { color: "#0288D1" },
        },
      ],
    },

    // ---------------------------------------------------------
    // Section 3: Solutions Consulting & Strategy
    // ---------------------------------------------------------
    {
      title: "Solutions Consulting & Strategy",
      fileName: "ConsultingImg",
      skills: [
        "⚡ Translating business goals into scalable technical roadmaps and proof-of-concepts",
        "⚡ Facilitating stakeholder alignment through workshops, presentations, and live demos",
        "⚡ Leading cross-functional knowledge-sharing sessions and technical trainings",
        "⚡ Managing SDLC & Agile processes to accelerate time-to-market for new features",
        "⚡ Orchestrating go-live supervision and post-deployment support for enterprise clients",
      ],
      softwareSkills: [
        {
          skillName: "Presentations",
          fontAwesomeClassname: "simple-icons:googleslides",
          style: { color: "#D84315" },
        },
        {
          skillName: "Project Management",
          fontAwesomeClassname: "fas fa-clipboard-list",
          style: { color: "#1565C0" },
        },
        {
          skillName: "Technical Writing",
          fontAwesomeClassname: "simple-icons:googledocs",
          style: { color: "#5D4037" },
        },
        {
          skillName: "Workshops",
          fontAwesomeClassname: "simple-icons:googleclassroom",
          style: { color: "#2E7D32" },
        },
        {
          skillName: "Business Analysis",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: { color: "#F9A825" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Google Workspace",
          fontAwesomeClassname: "simple-icons:googleworkspace",
          style: { color: "#4285F4" },
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
      color_code: "#8C151599",
    },
    {
      title: "Network+",
      subtitle: "- CompTIA",
      logo_path: "comptia.png",
      certificate_link:
        "https://www.youracclaim.com/badges/ebd8b10c-3a06-4edd-90b5-e4e280b2a0d5",
      alt_name: "comptia",
      color_code: "#00000099",
    },
    {
      title: "Certified Scrum Master",
      subtitle: "- Scrum Alliance",
      logo_path: "csm.png",
      certificate_link:
        "https://certification.scrumalliance.org/accounts/875481-devon-charles-henry/certifications?",
      alt_name: "scrum",
      color_code: "#0C9D5899",
    },
    {
      title: "Git and GitHub Bootcamp",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4241213d-4aab-4adf-a5e6-34f5100eda62/",
      alt_name: "udemy1",
      color_code: "#1F70C199",
    },
    {
      title: "Complete Python Bootcamp",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2698df4b-366f-4e18-9316-f88c9a6945af/",
      alt_name: "udemy2",
      color_code: "#1F70C199",
    },
    {
      title: "AWS Partner: Technical Accreditation",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/5a69529c-65e1-4c4c-ac6d-403e66aafe36?source=linked_in_profile",
      alt_name: "aws2",
      color_code: "#1F70C199",
    },
    {
      title: "Kubernetes Essentials",
      subtitle: "- A Cloud Guru",
      logo_path: "acg.png",
      certificate_link:
        "https://www.credly.com/badges/5a69529c-65e1-4c4c-ac6d-403e66aafe36?source=linked_in_profile",
      alt_name: "acg1",
      color_code: "#0C9D5899",
    },
    {
      title: "SAFe 4 Practitioner",
      subtitle: "- Scaled Agile, Inc.",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://scaledagile.com/certification/",
      alt_name: "safe4",
      color_code: "#00000099",
    },
    {
      title: "Certified Cloud Practitioner",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.certmetrics.com/amazon/electronic_certificate.aspx?cert=8455114F519DF416C1A108F5245B0046O8D1BB2BD3A9806FB4E8BB129FFF5F5F0",
      alt_name: "aws3",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Volunteership",
  description:
    "Cross-functional IT professional bridging hands-on DevSecOps, hybrid cloud, and SRE practices with client-facing solution design, consulting, and professional services. Skilled at building scalable, secure, and cost-efficient cloud solutions while optimizing performance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Solutions Engineer",
          company: "Triskelion Flagship, LLC",
          company_url: "https://tflagshipllc.com",
          logo_path: "tflagship_logo.png",
          duration: "May 2023 - Present",
          location: "Plantation, FL (remote)",
          description:
            "Developed end-to-end solutions customized to client needs utilizing various cloud infrastructure and DevOps tools while reducing annual infrastructure costs through implementing open-source alternatives and custom integrations.",
          accomplishments: [
            "- Coached clients towards successful implementation through collaborative solution design, technical training sessions, and product demonstration.",
            "- Reduced client infrastructure costs by an average of 70% across multiple projects through strategic implementation of tailored solutions, delivering over $15K in estimated savings over 14 months.",
            "- Automated over 95% of survey analysis workflow through Google Apps Script integration, allowing personalized quadrant analysis and results summary to be emailed to participants upon survey submission.",
            "- Automated On-Call tracking spreadsheet, capturing tickets worked, services supported, time of completion, and displaying percentage metrics for each On-Call Engineer.",
          ],
            color: "#000000",
        },
        {
          title: "DevOps Engineer",
          company: "Amazon Web Services",
          company_url: "https://aboutamazon.com/",
          logo_path: "aws_logo.png",
          duration: "September 2021 - May 2023",
          location: "Denver, CO (hybrid)",
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
          title: "System Administrator",
          company: "TEKsystems",
          company_url: "https://www.teksystems.com",
          logo_path: "teksystems.png",
          duration: "September 2019 - August 2021",
          location: "Dulles, VA (on-site)",
          description:
            "Supported Raytheon National Cybersecurity Protection System by maintaining diverse computing infrastructure including Windows Server, Linux hosts, container services, and virtualization environments while strengthening enterprise security through vulnerability scanning and system hardening per DoD RMF standards.",
          accomplishments: [
            "- Architected and demonstrated AWS migration proof-of-concept with high availability through multi-AZ deployment and failover routing, exceeding base requirements to enable Auto Scaling and self-healing capabilities.",
            "- Established and led knowledge exchange program, consulting with team members to identify skill gaps, delivering targeted VMware ecosystem trainings, and facilitating technical knowledge transfer across organizational boundaries.",
            "- Led System Admin team in rapidly enabling secure remote work for 63 users during COVID-19, achieving 100% successful onboarding through SOP documentation and MFA setup support across multiple operating systems.",
            "- Improved AWS account security and compliance by implementing and automating IAM reporting script — using AWS CLI, Python, and Bash — capturing AWS account user metrics for active access control and authentication methods.",
          ],
            color: "#9b1578",
        },
        {
          title: "Consultant, DoD Health IT",
          company: "Deloitte Consulting",
          company_url: "https://www2.deloitte.com/us/en/services/consulting.html",
          logo_path: "deloitte.png",
          duration: "September 2016 - September 2019",
          location: "Falls Church, VA (on-site)",
          description:
            "Upgraded DHA pathology lab systems for 39 Military Treatment Facilities worldwide, adhering to HIPPA / NIST compliance for EHR and system assets, while communicating progress to various stakeholders.",
          accomplishments: [
            "- Traveled on-site to coordinate with military points of contact throughout the course of deployment and provided remote post-rollout sustainment support.",
            "- Delivered on 100% of contractual milestones for the DHA program management office while streamlining cybersecurity risk and configuration management tasks.",
            "- Standardized network configuration processes for 19 sites and GFE asset management workflows for 108 contractors.",
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
          logo_path: "https://media.licdn.com/dms/image/v2/C4D0BAQG9ygTI9uy0JA/company-logo_100_100/company-logo_100_100/0/1631327183880?e=1754524800&v=beta&t=fwX1p3X9alj0MKKb6p9IT4G14v-NdU79mensvFziCtI",
          duration: "October 2014 - July 2017",
          location: "Brambleton, VA",
          description:
            "I worked primarily in a volunteer capacity for this after-school STEM mentorship program catering to girls in grades 3-12. I primarily focused on WordPress site maintenance, social media outreach (developing and presenting a Social Media Business Plan to organizational stakeholders), and booth management during events and conferences.",
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
  description: "I like to write about the DevOps or Docker projects I've worked on, my current work, and discuss my latest findings. Sometimes, more privately, I engage in creative writing exercises.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "open-source-password-management",
      name: "Open-Source Password Management",
      description: "Published February 2025 on LinkedIn Articles",
      url: "https://www.linkedin.com/pulse/open-source-password-management-part-1-enhancing-security-zq9kc",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am primiarily on LinkedIn and GitHub. You can also reach me via email at dhenry@tflagshipllc.com. I am open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the DevOps or Docker projects I've worked on, my current work, and discuss my latest findings. Sometimes, more privately, I engage in creative writing exercises.",
    //link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "Fort Lauderdale",
    country: "USA",
    region: "Florida",
    postalCode: "33324",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
