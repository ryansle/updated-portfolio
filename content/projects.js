export const projects = [
  {
    type: "Personal Projects",
    categoryDescription: "Projects that I made on my own time for my own reasons.",
    projects: [
      { 
        title: "Updated Portfolio",
        description: "It's been nearly a year since I first taught myself how to write webapps using React.js. I've learned a ton since then, and decided it was finally time to update my portfolio to make it more reflective of my skills now. So, naturally, I rebuilt the entire thing from the ground up: this time, using Chakra UI.",
        stack: ["React.js", "Next.js", "Chakra UI", "React Icons"],
        modal: {
          id: "updated-portfolio",
          title: "Updated Portfolio",
          stack: ["React.js", "Next.js", "Chakra UI", "React Icons", "EmailJS"],
          github: "https://github.com/ryansle/updated-portfolio",
          link: "https://ryanle.dev/",
          section1: "If you ever saw my old portfolio, you might remember how... clunky it felt. So, once I realized how easy Chakra UI was to work with, and how nice it looked, I knew I couldn't try to advertise my skills as a front-end developer by sticking with my original portfolio website that I built while still trying to figure out how to use React.js."
        }
      },
      { 
        title: "Pokémon Team Builder",
        description: "I used to play a lot of Pokémon. I always wanted to plan out the teams I would use ahead of time. I didn't find any solutions online that I liked, so I started building my own. This project is still a work in progress.",
        stack: ["React.js", "Material-UI", "AWS Amplify", "AWS Cognito", "AWS DynamoDB", "PokéAPI"],
        modal: {
          id: "pokemon-team-builder",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "Legacy Portfolio",
        description: "Last summer, after losing my planned internship due to the ongoing pandemic, I decided to pick up React.js for the first time and try to teach myself some of the basics of modern web development. This version of my portfolio was the first thing I ever built using those new skills.",
        stack: ["React.js", "Create React App", "Material-UI", "React-Router", "CSS"],
        modal: {
          id: "legacy-portfolio",
          title: "Legacy Portfolio",
          stack: ["React.js", "Create React App", "Material-UI", "React-Router", "CSS"],
          github: "https://github.com/ryansle/legacy-portfolio",
          link: "https://legacy.ryansle.dev/",
          section1: "The original portfolio I made was the first thing I ever built when I started learning React.js. As such, the code is messy, disorganized, and inconsistent. At best, it's amateur. That being said, from building that original website, I learned a TON."
        }
      },
    ],
  },
  {
    type: "Work Projects",
    categoryDescription: "Projects I've worked at out in industry that I'm allowed to talk about.",
    projects: [
      { 
        title: "Cardholder Portal",
        company: "Nelnet",
        description: "Reworked an existing React.js implementation of the Cardholder Portal to use the Material-UI component library, and also furthered its developments.",
        stack: ["React.js", "Material-UI", "Figma", "Amazon Web Services"],
        modal: {
          id: "cardholder-portal",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "Hoffman Analytics",
        company: "Hoffman Strategy Group",
        description: "An online commercial real estate feasibility analytics and client report generation platform that aggregated all of the Hoffman Strategy Group's project data into one place.",
        stack: ["React.js", "Material-UI", "Redux", "Amazon Web Services", "GraphQL"],
        modal: {
          id: "hoffman-analytics",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "DTC Report Generator",
        company: "Raven Industries",
        description: "A report generator tool that internal employees could use to create long-winded PDF reports of electronic component units and their details. This system replaced the previous approach of producing these reports manually by pulling information off of large spreadsheets.",
        stack: ["JavaScript", "Kendo UI", "CSS", "MySQL", "ASP.NET Core"],
        modal: {
          id: "dtc-report-generator",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
    ],
  },
  {
    type: "School Projects",
    categoryDescription: "Projects I've worked on throughout my college career for a grade.",
    projects: [
      { 
        title: "Grouve",
        description: "Also known as the \"SOFTie Startup\", my peers and I campaigned our university to allow us to pursue our own entrepreneurial experience during our final year of senior design. Grouve is a platform that changes the way that events are planned using music.",
        stack: ["React.js", "Chakra UI", "Next.js", "Amazon Web Services"],
        modal: {
          id: "grouve",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "Web-based Interactive Data Visualization",
        description: "Our final assignment for my Data Modeling course tasked us with visually representing states' population and GDP data within a webapp using the D3.s library. Using this library, we were able ot create interactive bar charts and scatter plots to better represent the provided dataset.",
        stack: ["React.js", "D3.js", "Google Colab", "Python", "pandas"],
        modal: {
          id: "d3-visuals",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "Social Media Marketing",
        description: "My senior design project last year was to create a social media marketing application on iOS for our project sponsor, the Buckle. The app consolidated their marketing department's social media posts",
        stack: ["Swift", "SwiftUI", "Alamofire", "Kingfisher", "Drupal"],
        modal: {
          id: "social-media-marketing",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "Virtual Reality Space Explorer",
        description: "Last year I enrolled myself in my university's 'Exploring Virtual Reality' course. In this course, we learned how to use tools like C#, Unity, and SteamVR to develop interactive virtual reality games while partnering up with Emerging Arts students at the university.",
        stack: ["C#", "Unity", "SteamVR", "Visual Studio"],
        modal: {
          id: "vr-space-explorer",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "Traffic Simulator",
        description: "We were handed broken city traffic simulator and learned to use a variety of different data structures and algorithms ranging from depth-first search to dynamic programming to repair the simulator.",
        stack: ["JavaScript", "HTML", "CSS"],
        modal: {
          id: "traffic-simulator",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
      { 
        title: "Care Tracking Application",
        description: "A basic CRUD application that allowed you to input and parse down patient data. This was my first real project experience.",
        stack: ["Python", "MySQL", "SQLAlchemy", "Kivy"],
        modal: {
          id: "care-tracking",
          title: "",
          stack: [],
          github: "",
          link: "",
          section1: ""
        }
      },
    ],
  },
];

// {
//   type: "",
//   categoryDescription: "",
//   projects: [
//     { 
//       title: "",
//       description: "",
//       stack: [],
//       modal: {
//         title: "",
//         stack: [],
//         github: "",
//         link: "",
//         section1: ""
//       }
//     },
//   ],
// },