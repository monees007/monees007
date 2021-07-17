import emoji from "react-easy-emoji";

const illustration = {
  animated: true
};

const greeting = {
  username: "Monees 007",
  title: "Hi all, I'm Monees Chandra",
  subTitle: emoji(
    "A passionate Android app Developer 📲 having experience with Java, Kotlin, and Flutter.\n Now-a-days I'm playing with Python"
  ),
  resumeLink:
        "https://docs.google.com/document/d/e/2PACX-1vRK5xSWiITQGOeRrDwzsET1mP8tjRqrxzQyX_SMeSuYQguPJ8zaAbsq-OmbmeJEPYNaF0bpQAEobmwt/pub",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/monees007",
    linkedin: "https://www.linkedin.com/in/monees007/",
    gmail: "monees007@outlook.com",
    instagram: "https://instagram.com/most_suitable_boy",
    twitter: "https://twitter.com/monees007",
  display: true
};

// Skills Section

const skillsSection = {
   title: "What I do",
    subTitle: "I USE TO ENJOY ANDROID DEVELOPMENT APART FROM MY COLLEGE SYLLABUS",
    skills: [
      emoji(
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
      ),
      emoji("⚡ Bind different APIs with python"),
      emoji(
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      )
    ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
        {
          skillName: "java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          skillName: "kotlin",
          fontAwesomeClassname: "fab fa-korvue"
        },
        {
          skillName: "flutter",
          fontAwesomeClassname: "fab fa-angle-left"
        },

        {
          skillName: "ubuntu",
          fontAwesomeClassname: "fab fa-ubuntu"
        },
        {
          skillName: "android-studio",
          fontAwesomeClassname: "fab fa-android"
        },
        {
          skillName: "firebase",
          fontAwesomeClassname: "fas fa-fire"
        },
        {
          skillName: "sql-database",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        //    {
        //      skillName: "anaconda",
        //      fontAwesomeClassname: "fab fa-snake"
        //    },
        {
          skillName: "python",
          fontAwesomeClassname: "fab fa-python"
        }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Banaras Hindu University, Varanasi",
      logo: require("./assets/images/bhu.jpeg"),
      subHeader: "Bachelor of Science, Hon's in Life Sciences",
      duration: "August 2019 - April 2022",
      desc: "Currently studying bio-chemistry, Genetics, Cell Biology, and Physiological Functions, etc."
      //       descBullets: []
    },
    {
      schoolName: "Indian Institute of Technology, Madras",
      logo: require("./assets/images/iitm.png"),
      subHeader: "B.Sc. in Computer Programming and Data Science",
      duration: "September 2020 - April 2024",
      desc: "Learning Programming, Algorithms, Operating Systems, Data Structures, Data Analytics, etc."
      //       descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "81%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false,
};

// Some big projects you have worked on

const bigProjects = {
  title: "Intresting Projects",
  //subtitle: "",
  projects: [
    {
      image: require("./assets/images/notebook.jpg"),
      projectName: "Notebook",
      projectDesc: "Academic Notes provided under Creative Commons License",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://monees007.github.io/Notebook/"
        }
        //  add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dextrose.jpeg"),
      projectName: "September",
      projectDesc: "Integrated bots running cross-platform; a backend to enhance user-interactions and accessibility.",
      footerLink: [
        {
          name: "Go to Repository",
          url: "https://github.com/users/monees007/projects/1"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false,
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 🤙🏼️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7897914523",
  email_address: "monees007@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "monees0007", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
