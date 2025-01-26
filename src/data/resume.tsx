import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Meet Bagda", // Your name
  initials: "MB", // Your initials
  url: "https://meetbagda.vercel.app", // Your Portfolio URL
  location: "Rajkot city, Gujarat, India", // Your location
  locationLink: "https://www.google.com/maps/place/Rajkot,+Gujarat,+India", // Your location link (if available)
  description:
    "Software Developer. Passionate about creating innovative solutions through full-stack development. Continuously learning and improving. AIML enthusiast",
    // Your description
  summary:
  "I am a proactive web developer with expertise in the MERN stack. I enjoy using my skills to develop full-stack projects and I also have a passion for continuous learning, improvement, and teamwork. I’ve also participated in hackathons and won runner-up in 3 hackathons and coding competition.",
    // Your summary
  avatarUrl: "/me.png", // Replace with path to your avatar image
  skills: [
    "C",
    "Java",
    "HTML/CSS",
    "JavaScript",
    "Python",
    "TypeScript",
    "DotNet",
    "Pandas",
    "Scikit-learn",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "MongoDB",
    "SQL",
    "React",
    "Node",
    "Express",
    "Angular",
    "Vitejs",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // Removed Blog for now
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bagdameet@gmail.com", // Your email
    tel: "7228925035", // Your phone number
    social: {
        GitHub: {
            name: "GitHub",
            url: "https://github.com/MeetBagda",
            icon: Icons.github,
            navbar: true,
          },
          LinkedIn: {
            name: "LinkedIn",
            url: "https://linkedin.com/in/meet-bagda-190438257",
            icon: Icons.linkedin,
            navbar: true,
          },
          
      X: {
        name: "X",
        url: "https://x.com/meetbagda035",
        icon: Icons.x,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "your-youtube-url",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
        
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
        company: "NUllClass",
        href: "https://www.nullclass.com/",
        badges: [],
        location: "Bangalore, India",
        title: "Internship",
        logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQGCs07yzlcG9Q/company-logo_200_200/company-logo_200_200/0/1630646786601/nullclassdotcom_logo?e=2147483647&v=beta&t=HzWjQJIPj_5_S7_jDDEjZ2yeQpYkoZnMDpLs7cw1zqQ", // Add your logo, if any
        start: "Jan 2025",
        end: "Present", // Use end date if any
        description:
          "Working as a full-stack developer intern at NullClass, contributing to the development of web applications using the MERN stack. Collaborating with team members to deliver high-quality software solutions.",
      },
    // {
    //   company: "CodeRelay-24 Programming Club - Darshan University",
    //     //href: "", // No website
    //   badges: [],
    //   location: "Gujarat, India",
    //   title: "2nd Runner-Up",
    //   logoUrl: "/coderelay24.png", // Add your logo, if any
    //   start: "Mar 2024",
    //   end: "",
    //     description: "Achieved 2nd Runner-Up position in CodeRelay-24, demonstrating exceptional problem-solving skills and technical expertise in a competitive environment.",
    // },
    // {
    //   company: "DU Frolic 2023 Code-A-Thon - Darshan University",
    //   //href: "", // No website
    //   badges: [],
    //   location: "Gujarat, India",
    //   title: "Runner-Up",
    //     logoUrl: "/frolic2023.png", // Add your logo, if any
    //   start: "Sept 2023",
    //     end: "",
    //     description: "Secured runner-up in the final round of the DU Frolic 2023 Code-A-Thon, showcasing advanced coding and algorithmic skills among a large pool of participants.",
    // },
    // {
    //   company: "DU Hackathon 2023 - Darshan University",
    //   //href: "", // No website
    //   badges: [],
    //   location: "Gujarat, India",
    //   title: "Runner-Up",
    //     logoUrl: "/hackathon2023.png", // Add your logo, if any
    //   start: "Dec 2023",
    //     end: "",
    //   description:
    //       "Contributed as a team member to win runner-up at DU Hackathon 2023, highlighting effective teamwork and innovative solutions in a hackathon.",
    // },
  ],
  education: [
    {
      school: "Darshan University",
      href: "https://darshan.ac.in/", // Add your School URL
      degree: "Bachelor of Technology",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1w9io44iJzRf8Uf3tQUSk7AZ3vK-9GS8wDQ&s", // Add school logo
      start: "2022", // Start Year
      end: "2026",  // Expected Graduation Year
    },
    {
      school: "Pathak School - Rajkot",
        href: "#", //No URL
      degree: "Higher Secondary School",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzS2iEnUa8FHF_SgYcF7gHdLLSVRdqoXFLNg&s", // Add school logo
      start: "2020",
      end: "2022",
    },
    {
      school: "National School - Lodhika, Rajkot",
        href: "#", //No URL
      degree: "Secondary School",
        logoUrl: "#", // Add school logo
      start: "2012",
      end: "2019",
    },
  ],
   projects: [
    {
      title: "AI-Powered-Email-Generator",
      href: "https://email-generator-puce.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Developed a React/Node/Python application using Google Gemini for prompt-based email generation with customizable parameters. Integrated with JWT.",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "JWT",
        "Google Gemini"
      ],
      links: [
        {
          type: "Website",
          href: "https://email-generator-puce.vercel.app/",
          icon: <Icons.globe className="size-3" />
        },
          {
            type: "Source",
            href: "https://github.com/MeetBagda/AI-Powered-Email-Generator",
            icon: <Icons.github className="size-3" />,
          }
      ],
      image: "/EmailGenFront.png", // Replace with your project images
        // video: "" // Replace with the video URL
        // you can remove video link if you don't have a demo video
    },
    {
        title: "PayTM",
        href: "https://paytm-ashy.vercel.app/",
        dates: "2024",
        active: true,
        description:
          "Developed a web application mimicking core features of Paytm, enabling users to send money to other users. Implemented user authentication using JWT, balance display, and transaction processing using React, Node.js, and MongoDB.",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "JWT"
        ],
        links: [
          {
            type: "Website",
            href: "https://paytm-ashy.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
          {
            type: "Source",
            href: "https://github.com/MeetBagda/Paytm",
            icon: <Icons.github className="size-3" />,
          }
        ],
        image: "/PayTM.png", // Replace with your project images
            // video: "" // Replace with the video URL
            // you can remove video link if you don't have a demo video
      },
    {
      title: "Coffee Shop - DotNet Semeste 5",
        href: "#",
      dates: "2023",
      active: true,
      description:
        "Make a stunning coffee management shop using dotnet core with integrate MSSql database. It comprises with the storeprocedure and authentication.",
      technologies: [
        "DotNet",
          "MSSQL",
          "C#"
      ],
      links: [
          // You can add demo link if you have one
      //    {
      //     type: "Website",
      //    href: "",
      //     icon: <Icons.globe className="size-3" />,
      //    }
      
          {
            type: "Source",
            href: "https://github.com/MeetBagda/Coffee-Shop",
            icon: <Icons.github className="size-3" />,
          }
        ],
      image: "/CoffeeShopFront.jpeg", // Replace with your project images
        // video: "" // Replace with the video URL
        // you can remove video link if you don't have a demo video
    },
      //  {
      //      title: "Modern Animated Website for Ray-Ban - Semester 4",
      //       //href: "",
      //      dates: "2023",
      //      active: true,
      //      description:
      //        "Created a visually engaging and interactive website for Ray-Ban featuring modern animations and responsive design.",
      //    technologies: [
      //      "HTML",
      //        "CSS",
      //        "JavaScript",
      //    ],
      //      links: [
      //           // You can add demo link if you have one
      // //    {
      // //     type: "Website",
      // //    href: "",
      // //     icon: <Icons.globe className="size-3" />,
      // //    }
      //        ],
      //    image: "", // Replace with your project images
      //        // video: "" // Replace with the video URL
      //       // you can remove video link if you don't have a demo video
      // },
      {
        title: "Employee Management System (MEAN Stack) - Semester 4",
        href: "#",
        dates: "2023",
        active: true,
        description:
          "Designed and built an Employee Management System leveraging the MEAN stack (MongoDB, Express.js, Angular, Node.js). Enabled functionalities for employee records management, including addition, modification, and deletion of employee profiles.",
        technologies: [
           "MongoDB",
            "Express.js",
           "Angular",
            "Node.js"
        ],
        links: [
        // You can add demo link if you have one
      //    {
      //     type: "Website",
      //    href: "",
      //     icon: <Icons.globe className="size-3" />,
      //    }
        ],
        image: "", // Replace with your project images
            // video: "" // Replace with the video URL
            // you can remove video link if you don't have a demo video
    },
  ],
  hackathons: [
    {
      title: "HACKOUT24 - DAIICT University",
        dates: "Aug 2024",
      location: "Gujarat, India",
      description:
        "Developed an online shop for farmers with team NAAVI, gaining insights into agricultural challenges and networking with industry professionals.",
      image:
        "",// No image for now
      mlh: "",
      links: [],
    },
    {
      title: "CodeRelay-24 - Darshan University",
        dates: "Mar 2024",
        location: "Gujarat, India",
      description:
        "Achieved 2nd Runner-Up position in CodeRelay-24, demonstrating exceptional problem-solving skills and technical expertise in a competitive environment.",
        image:
        "",// No image for now
      mlh: "",
      links: [],
    },
    {
      title: "DU Frolic 2023 Code-A-Thon - Darshan University",
      dates: "Sept 2023",
        location: "Gujarat, India",
      description:
       "Secured runner-up in the final round of the DU Frolic 2023 Code-A-Thon, showcasing advanced coding and algorithmic skills among a large pool of participants.",
        image:
        "",// No image for now
        mlh: "",
        links: [],
    },
    {
      title: "DU Hackathon 2023 - Darshan University",
        dates: "Dec 2023",
        location: "Gujarat, India",
      description:
       "Contributed as a team member to win runner-up at DU Hackathon 2023, highlighting effective teamwork and innovative solutions in a hackathon.",
        image:
        "",// No image for now
        mlh: "",
      links: [],
    },
  ],
} as const;