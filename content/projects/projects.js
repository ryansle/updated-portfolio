export const projects = [
  {
    type: "Personal Projects",
    categoryDescription:
      "Projects that I made on my own time for my own reasons.",
    projects: [
      {
        id: "updated-portfolio",
        title: "Updated Portfolio",
        description:
          "It's been nearly a year since I first taught myself how to create webapps using React.js. I've learned a ton since then, and decided it was finally time to update my portfolio to make it more reflective of my skills now. So, naturally, I rebuilt the entire thing from the ground up: this time, using Chakra UI.",
        stack: ["React.js", "Chakra UI", "Next.js", "React Icons"],
      },
      // {
      //   id: "pokemon-team-builder",
      //   title: "Pokémon Team Builder",
      //   description: "I used to play a lot of Pokémon. I always wanted to plan out the teams I would use ahead of time. I didn't find any solutions online that I liked, so I started building my own. This project is still a work in progress.",
      //   stack: ["React.js", "Material-UI", "AWS Amplify", "AWS Cognito", "AWS DynamoDB", "PokéAPI"],
      // },
      {
        id: "legacy-portfolio",
        title: "Legacy Portfolio",
        description:
          "Last summer, after losing my planned internship due to the ongoing pandemic, I decided to pick up React.js for the first time and try to teach myself some of the basics of modern web development. This version of my portfolio was the first thing I ever built using those new skills.",
        stack: [
          "React.js",
          "Material-UI",
          "Create React App",
          "React-Router",
          "CSS",
          "EmailJS",
        ],
      },
    ],
  },
  {
    type: "Work Projects",
    categoryDescription:
      "Projects I've worked on in industry that I'm allowed to talk about.",
    projects: [
      {
        id: "cardholder-portal",
        title: "Cardholder Portal",
        company: "Nelnet",
        description:
          "Reworked an existing React.js implementation of the Cardholder Portal to use the Material-UI component library, and also furthered its developments.",
        stack: [
          "React.js",
          "Material-UI",
          "Create-React-App",
          "React-Router",
          "Amazon Web Services",
        ],
      },
      {
        id: "hoffman-analytics",
        title: "Hoffman Analytics",
        company: "Hoffman Strategy Group",
        description:
          "An online commercial real estate feasibility analytics and client report generation platform that aggregated all of the Hoffman Strategy Group's project data into one place.",
        stack: [
          "React.js",
          "Material-UI",
          "Create React App",
          "Redux",
          "Amazon Web Services",
          "GraphQL",
        ],
      },
      {
        id: "dtc-report-generator",
        title: "DTC Report Generator",
        company: "Raven Industries",
        description:
          "A report generator tool that internal employees could use to create long-winded PDF reports of electronic component units and their details. This system replaced the previous approach of producing these reports manually by pulling information off of large spreadsheets.",
        stack: [
          "JavaScript",
          "Kendo UI",
          "jQuery",
          "ASP.NET Core",
          "MySQL",
          "CSS",
        ],
      },
    ],
  },
  {
    type: "School Projects",
    categoryDescription:
      "Projects I've worked on throughout my college career for a grade.",
    projects: [
      {
        id: "grouve",
        title: "Grouve",
        description:
          'Also known as the "SOFTie Startup", my peers and I campaigned our university to allow us to pursue our own entrepreneurial experience during our final year of senior design. Grouve is a platform that changes the way that events are planned using music.',
        stack: ["React.js", "Chakra UI", "Next.js", "Firebase"],
      },
      // {
      //   id: "d3-visuals",
      //   title: "Web-based Interactive Data Visualization",
      //   description: "Our final assignment for my Data Modeling course tasked us with visually representing states' population and GDP data within a webapp using the D3.s library. Using this library, we were able ot create interactive bar charts and scatter plots to better represent the provided dataset.",
      //   stack: ["React.js", "D3.js", "Google Colab", "Python", "pandas"],
      // },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        description:
          "My senior design project last year was to create a social media marketing application on iOS for our project sponsor, the Buckle. The app consolidated their marketing department's social media posts.",
        stack: [
          "Swift",
          "SwiftUI",
          "Alamofire",
          "Kingfisher",
          "TestFlight",
          "Drupal",
        ],
      },
      {
        id: "vr-space-explorer",
        title: "Virtual Reality Space Explorer",
        description:
          'Last year I enrolled myself in my university\'s "Exploring Virtual Reality" course. In this course, we learned how to use tools like C#, Unity, and SteamVR to develop interactive virtual reality games while partnering up with Emerging Arts students at the university.',
        stack: ["C#", "Unity", "SteamVR", "Visual Studio"],
      },
      // {
      //   id: "traffic-simulator",
      //   title: "Traffic Simulator",
      //   description: "We were handed broken city traffic simulator and learned to use a variety of different data structures and algorithms ranging from depth-first search to dynamic programming to repair the simulator.",
      //   stack: ["JavaScript", "HTML", "CSS"],
      // },
      // {
      //   id: "care-tracking",
      //   title: "Care Tracking Application",
      //   description: "A basic CRUD application that allowed you to input and parse down patient data. This was my first real project experience.",
      //   stack: ["Python", "MySQL", "SQLAlchemy", "Kivy"],
      // },
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
//     },
//   ],
// },
