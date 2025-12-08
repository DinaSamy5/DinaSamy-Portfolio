import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dina Samy",
  initials: "DV",
  url: "https://dina-samy-portfolio-wwcl.vercel.app/",
  location: "Ismailia, Egypt",
  locationLink: "https://www.google.com/maps/place/Ismailia",
  description:
    "CS Student | Technical Ambassador @ ITI | MEAN Stack Developer | Problem Solver | HR Head",
  summary:
     "I'm a third-year Computer Science student at Suez Canal University, passionate about full-stack development, competitive programming, and student leadership.I actively participate in ICPC training, ECPCQ competitions, and solve problems on Codeforces (Rating: 990).I have completed multiple trainings including .NET, CS50 at ITI, and a summer networking internship at the Suez Canal Authority.Currently, I am a Full-Stack Trainee at NTI, a Technical Ambassador at ITI, Head of HR at Mesh Hakers, and Vice HR at the ICPC SC Team and Level 2 Training.I'm strongly interested in building scalable applications, improving my full-stack expertise, and contributing to impactful tech communities." ,
  avatarUrl: "/DinaSamy.jpeg",
  skills: [
    "HTML", "CSS", "JavaScript","Node.js",
    "SQL", ".NET", "C#", "C++","Python",
    "OOP", "Data Structures", "Algorithms",
    "Problem Solving", "Git & GitHub"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "dinnasamy55555.gmail.com",
    tel: "+201153937097",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DinaSamy5",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dina-samy-3095002a6",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@dinasamy-u6i?si=fiixOFU0lI5QKdr_",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "dinnasamy55555.gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ITI",
      href: "https://iti.gov.eg",
      badges: [],
      location: "Remote",
      title: "Technical Ambassador l",
      logoUrl: "https://egyincs.com/wp-content/uploads/2023/10/iti.png",
      start: "NOV 2025",
      end: "present",
      description:
        "Technical Ambassador I at ITI | Passionate about supporting tech communities, empowering learners, and representing ITI in events and initiatives. Turning knowledge into real-world impact and fostering growth in the tech ecosystem.",
    },
    {
      company: "Mish Hackers",
      badges: [],
      href: "",
      location: "Remote",
      title: "Head of HR Committee",
      logoUrl: "/mish.jpeg",
      start: "OCT 2025",
      end: "present",
      description:
        "Leading recruitment, communication, and team development.",
    },
    {
      company: "ICPC SC Team",
      badges: [],
      href: "",
      location: "Remote",
      title: "Vice Head of HR Committee",
      logoUrl: "/icpc.jpeg",
      start: "OCT 2025",
      end: "present",
      description:
        "Overseeing HR tasks, supporting contestants, and guiding new members."
    }
  ],
  education: [
    {
      school: "Faculty of Computers & Information, Suez Canal University",
      href: "",
      degree: "CS Student",
      logoUrl: "https://upload.wikimedia.org/wikipedia/ar/thumb/5/56/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D9%82%D9%86%D8%A7%D8%A9_%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3.png/250px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D9%82%D9%86%D8%A7%D8%A9_%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3.png",
      start: "OCT 2023",
      end: "present",
    },
    {
      school: "National Telecommunication Institute (NTI)",
      href: "https://www.nti.sci.eg",
      degree: "MEAN Stack intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHaD_EFdPUo1A/company-logo_200_200/company-logo_200_200/0/1630564581522?e=2147483647&v=beta&t=0r75jBUH7hOJ9_RC8hs9wwhV5E2LtticQ6Yh1WEbS0U",
      start: "NOV 2025",
      end: "present",
    },
    {
      school: "ICPC SC Team",
      href: "",
      degree: "Level 2 & ECPCQ Intern",
      logoUrl: "/icpc.jpeg",
      start: "JAN 2025",
      end: "present",
    },
    
  ],
  Licenses: [
    {
      company: ".Net Web Development",
      href: "https://iti.gov.eg",
      badges: [],
      location: "Remote",
      title: "ITI",
      logoUrl: "https://egyincs.com/wp-content/uploads/2023/10/iti.png",
      start: "AUG 2025",
      description:
        "NET Web Development Training | Completed a 162-hour program at ITI, gaining hands-on experience with SQL Server, C#, LINQ, Entity Framework, ASP.NET Core, and web application development using Microsoft technologies.",
    },
    {
      company: "Networking & Cyber Security",
      href: "https://iti.gov.eg",
      badges: [],
      location: "Remote",
      title: "Suez Canal Authority",
      logoUrl: "https://upload.wikimedia.org/wikipedia/ar/2/25/%D9%87%D9%8A%D8%A6%D8%A9_%D9%82%D9%86%D8%A7%D8%A9_%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3.png",
      start: "JUL 2025",
      description:
        "Networking & Cyber Security Internship | Gained hands-on experience in Networking fundamentals, Data Center concepts, and Cyber Security basics through a summer program with the Suez Canal Authority.",
    },
    
    {
      company: "ECPC Qualification Day 8",
      badges: [],
      href: "",
      location: "Remote",
      title: "ECPC",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E1BAQERt_6w7EMUYQ/company-background_10000/company-background_10000/0/1603290244441/ecpc_egyptian_collegiate_programming_contest_cover?e=2147483647&v=beta&t=i6_SNNsZOk4wln5myAL2oKA7ritF1gEuV7mKX5ZYDZA",
      start: "AUG 2025",
      end: "present",
      description:
        "First ECPC Experience | Proud to achieve 68th place out of 208 teams on Day 8 with my amazing team. Grateful for the collaboration, learning, and positive energy — this is just the beginning!"
    },
    {
      company: "Vice Head of HR Committee Season 5",
      badges: [],
      href: "",
      location: "Remote",
      title: "Mish Hackers",
      logoUrl: "/mish.jpeg",
      start: "2025",
      end: "present",
      description:
        "Leading recruitment, communication, and team development.",
    },
    {
      company: "Introduction to Computer Science (CS50)",
      href: "https://iti.gov.eg",
      badges: [],
      location: "Remote",
      title: "ITI",
      logoUrl: "https://egyincs.com/wp-content/uploads/2023/10/iti.png",
      start: "JUL 2024",
      description:
        "CS50: Introduction to Computer Science | Completed Harvard’s renowned program with ITI certification, gaining strong foundations in C, Python, SQL, Data Structures & Algorithms, and Web Development (HTML, CSS, JavaScript), including a capstone project.",
    },
    
  ],

  projects: [
    {
      title: "Trendify",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Trendify is a fashion-focused website created as part of a university Web Development practical exam. The project showcases creativity, responsive design, and interactive features, reflecting a collaborative effort among team members. It emphasizes teamwork, design, and front-end development skills.",
      technologies: [
        "HTML","CSS","JavaScript","Responsive Web Design","Frontend Development","Team Collaboration","Creative Design"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DinaSamy5/Trendify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/trend.png",
      video:
        "",
    },
    {
      title: ".Net Project",
      href: "",
      dates: "AUG 2025",
      active: true,
      description:
        "A web application developed using C# and ASP.NET, featuring a structured backend and responsive frontend with HTML and CSS. The project demonstrates full-stack development skills, including UI design, data handling, and end-to-end web application implementation.",
      technologies: [
        "C#","ASP.NET","HTML","CSS",".NET Web‑Development","Git & GitHub","Full‑Stack Development (Backend + Frontend)"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DinaSamy5/ITI_Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/iti-pro.png",
      video: "",
    },
    {
      title: "Book Management System (C++ OOP Project)",
      href: "",
      dates: "OCT 2025",
      active: true,
      description:
        "Book Management System is a C++ project built using Object-Oriented Programming (OOP) concepts. It allows users to manage books and authors efficiently, including adding, searching, rating, linking books to authors, and retrieving highest-rated books. The system demonstrates encapsulation, abstraction, operator overloading, composition, and dynamic memory management.",
      technologies: [
        "C++","Object-Oriented Programming (OOP)","Encapsulation","Abstraction","Operator Overloading","Composition","Dynamic Memory Management","Data Structures","Problem Solving","Project Implementation"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DinaSamy5/Library-Management-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HarmonyHub – C++ Circular Doubly Linked List Playlist Manager",
      href: "",
      dates: "2024",
      active: true,
      description:
        "HarmonyHub is a C++ project built to manage music playlists using Circular Doubly Linked Lists (CDLL). The system allows users to add, remove, edit, mark favorites, navigate, sort, analyze, and save/load playlists efficiently. The project highlights data structure mastery, dynamic memory management, and collaborative team development.",
      technologies: [
        "C++","Circular Doubly Linked List (CDLL)","Data Structures","Dynamic Memory Management","CRUD Operations","File Handling","Problem Solving","Team Collaboration","Algorithm Implementation","Project Development",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/DinaSamy5/HarmonyHub---Playlist-Manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
  ],
  
} as const;
