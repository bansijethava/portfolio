export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  screenshot?: string;
  githubUrl?: string;
  liveUrl?: string;
  learnings?: string[];
}

export interface SkillItem {
  name: string;
  level: "Proficient & Completed" | "Coursework Completed" | "Active Exploration";
  context: string;
  keyTopics: string[];
  status: "completed" | "learning-goal";
  category: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export interface CourseSubject {
  code?: string;
  name: string;
  type: string;
  overview: string;
  topics: string[];
}

export interface SemesterCurriculum {
  semesterId: number;
  semesterName: string;
  status: string;
  summary: string;
  subjects: CourseSubject[];
}

export interface JourneyStage {
  step: string;
  title: string;
  summary: string;
  details: string;
  status: "current" | "next" | "future";
}

export interface CertificateItem {
  id: string;
  title: string;
  type: string;
  eventName: string;
  symposium: string;
  category: string;
  recipient: string;
  organizer: string;
  date: string;
  location: string;
  officialText: string;
  description: string;
  skillsDemonstrated: string[];
  supporters: string[];
  signatories: { name: string; designation: string }[];
  imagePath?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  semester: string;
  location: string;
  curriculum: SemesterCurriculum[];
}

export const educationData: EducationEntry = {
  institution: "AVPTI GTU College, Rajkot, Gujarat",
  degree: "Diploma",
  field: "Computer Engineering",
  semester: "3rd Semester Completed",
  location: "Rajkot, Gujarat, India",
  curriculum: [
    {
      semesterId: 1,
      semesterName: "Semester 1",
      status: "Completed with Rigor",
      summary:
        "Built solid foundations in procedural computer programming in C, static web page authoring, engineering mathematics, and fundamental sciences.",
      subjects: [
        {
          code: "4310701",
          name: "Computer Programming Fundamentals (C)",
          type: "Core Programming",
          overview:
            "Introduced structured procedural problem-solving using C. Mastered algorithm design, flowcharts, data types, conditional branching, iteration, user-defined functions, and array processing with intensive hands-on lab sessions.",
          topics: [
            "Algorithms & Flowcharts",
            "Data Types & Operators",
            "Control Structures (if-else, switch, loops)",
            "Modular Functions & Scope",
            "One-Dimensional & Multi-Dimensional Arrays",
          ],
        },
        {
          code: "4310702",
          name: "Computer Basics & Static Web Page Designing",
          type: "Web & Computing",
          overview:
            "Explored computer system hardware architecture, operating software essentials, and authoring clean, accessible static web documents using semantic HTML tags and CSS styling rules.",
          topics: [
            "Hardware Components & Peripherals",
            "Semantic HTML5 Page Structure",
            "CSS Styling & Box Model",
            "Hyperlinks, Tables & Forms",
            "Web Browsing Standards",
          ],
        },
        {
          code: "4300001",
          name: "Mathematics - I",
          type: "Engineering Mathematics",
          overview:
            "Strengthened mathematical reasoning essential for computer engineering, focusing on algebra, determinants, trigonometry, and calculus for computational calculations.",
          topics: [
            "Determinants & Matrices",
            "Trigonometric Functions",
            "Vectors & Analytical Geometry",
            "Differential Calculus Basics",
          ],
        },
        {
          code: "4300002",
          name: "Communication Skills in English",
          type: "Professional Development",
          overview:
            "Enhanced professional verbal communication, technical report writing, vocabulary, listening comprehension, and formal presentation skills required in modern engineering workplaces.",
          topics: [
            "Technical Writing & Documentation",
            "Grammar & Professional Vocabulary",
            "Effective Verbal & Non-verbal Communication",
            "Presentations & Public Speaking",
          ],
        },
        {
          code: "4300003",
          name: "Basics of Electronics & Engineering Physics",
          type: "Hardware & Sciences",
          overview:
            "Gained foundational insight into electronic components, semiconductor physics, diodes, transistors, circuit principles, and measurement tools powering computer systems.",
          topics: [
            "Semiconductor Physics",
            "Diodes, Transistors & Rectifiers",
            "Electronic Measuring Instruments",
            "Power Supplies & Logic Signals",
          ],
        },
      ],
    },
    {
      semesterId: 2,
      semesterName: "Semester 2",
      status: "Completed with Rigor",
      summary:
        "Advanced into object-oriented thinking with C++, digital logic circuit design, computer organization, and applied mathematics.",
      subjects: [
        {
          code: "4320701",
          name: "Object-Oriented Programming (C++)",
          type: "Core Programming",
          overview:
            "Studied paradigm transition from procedural to object-oriented programming. Mastered classes, objects, data encapsulation, inheritance hierarchies, polymorphism, constructor mechanisms, and abstract data modeling.",
          topics: [
            "Classes & Objects",
            "Constructors & Destructors",
            "Inheritance (Single, Multiple, Hierarchical)",
            "Polymorphism & Function Overloading",
            "Encapsulation & Access Specifiers",
          ],
        },
        {
          code: "4320702",
          name: "Digital Logic Design & Techniques",
          type: "Hardware & Systems",
          overview:
            "Explored the mathematical and digital foundations of hardware processors. Covered binary number systems, Boolean algebra, logic gate simplification with K-maps, and digital combinational and sequential circuit synthesis.",
          topics: [
            "Binary, Hexadecimal & Arithmetic",
            "Logic Gates & Boolean Algebra",
            "Karnaugh Maps (K-Maps) Minimization",
            "Combinational Circuits (Adders, Decoders, Mux)",
            "Sequential Circuits (Flip-Flops, Registers)",
          ],
        },
        {
          code: "4320703",
          name: "Computer Organization & Operating System Basics",
          type: "Systems Architecture",
          overview:
            "Examined the internal architectural organization of computers including CPU registers, ALU operations, instruction cycles, memory hierarchy (cache, RAM), and basic operating system boot mechanisms.",
          topics: [
            "CPU Architecture & Registers",
            "Instruction Execution Cycles",
            "Memory Hierarchy & Cache Memory",
            "Input/Output Interfacing & Busses",
            "Introductory OS Concepts",
          ],
        },
        {
          code: "4300004",
          name: "Applied Mathematics - II",
          type: "Engineering Mathematics",
          overview:
            "Developed advanced analytical problem-solving skills utilizing matrices, integral calculus, differential equations, and numerical computing methods applied to engineering situations.",
          topics: [
            "Matrix Operations & Inverse",
            "Integral Calculus & Applications",
            "Differential Equations",
            "Numerical Solutions & Analysis",
          ],
        },
        {
          code: "4300005",
          name: "Environmental Sustainability",
          type: "Applied Science",
          overview:
            "Studied natural ecosystems, pollution control, resource conservation, sustainable environmental management, and modern green computing considerations.",
          topics: [
            "Ecosystems & Biodiversity",
            "Pollution Prevention & Control",
            "Natural Resource Management",
            "Sustainable Technology Practices",
          ],
        },
      ],
    },
    {
      semesterId: 3,
      semesterName: "Semester 3",
      status: "Completed with Rigor",
      summary:
        "Completed full computer engineering core subjects: deep Data Structures & Algorithms in C, Python programming, RDBMS with SQL databases, operating systems, and responsive web design.",
      subjects: [
        {
          code: "4330701",
          name: "Data Structures & Algorithms (DSA in C)",
          type: "Core CS",
          overview:
            "Completed entire DSA syllabus implemented directly in C language. Comprehensive conceptual and hands-on mastery of dynamic memory allocation, linear structures (Linked Lists, Stacks, Queues), non-linear structures (Binary Trees, Graphs), Sorting & Searching algorithms, and algorithmic complexity (Big O).",
          topics: [
            "Dynamic Memory (malloc, calloc, free)",
            "Single, Double & Circular Linked Lists",
            "Stacks (Infix to Postfix conversion, Evaluation)",
            "Queues (Linear, Circular, Double-Ended, Priority)",
            "Binary Search Trees (BST) & Tree Traversals",
            "Graph Representations (Matrix, Adjacency List)",
            "Sorting (Bubble, Selection, Insertion, Merge, Quick)",
            "Searching (Linear, Binary) & Complexity Analysis",
          ],
        },
        {
          code: "4330702",
          name: "Scripting Language - Python",
          type: "Core Programming",
          overview:
            "Thoroughly learned Python syntax, core built-in data structures (lists, tuples, dictionaries, sets), functional programming, list comprehensions, string operations, exception handling, and practical file I/O operations.",
          topics: [
            "Python Syntax, Variables & Dynamic Typing",
            "Conditionals, Loops & Iterators",
            "Functions, Scope, Arguments & Lambdas",
            "Data Collections (Lists, Tuples, Dictionaries, Sets)",
            "String Processing & Built-in Methods",
            "File Handling (Read, Write, Append) & OS Operations",
            "Error & Exception Handling (try-except-finally)",
          ],
        },
        {
          code: "4330703",
          name: "Relational Database Management System (RDBMS & SQL)",
          type: "Databases",
          overview:
            "Studied relational database principles, Entity-Relationship (ER) modeling, and SQL querying. Wrote complex queries involving DDL, DML, relational integrity constraints, table joins, group-by aggregations, subqueries, and database normalization.",
          topics: [
            "RDBMS Architecture & Relational Concepts",
            "ER Diagrams & Database Schema Design",
            "SQL DDL (CREATE, ALTER, DROP) & DML (INSERT, UPDATE, DELETE)",
            "SQL DQL (SELECT, WHERE, ORDER BY, GROUP BY, HAVING)",
            "Integrity Constraints (Primary, Foreign, Unique, Check)",
            "Multi-table JOINs (INNER, LEFT, RIGHT, FULL) & Subqueries",
            "Normalization (1NF, 2NF, 3NF, BCNF) to reduce redundancy",
          ],
        },
        {
          code: "4330704",
          name: "Basics of Operating System",
          type: "Systems",
          overview:
            "Deepened understanding of operating system architectures and resource management. Covered process lifecycle, CPU scheduling algorithms (FCFS, SJF, Round Robin), inter-process communication, deadlock conditions, and virtual memory paging.",
          topics: [
            "OS Architecture & System Calls",
            "Process Management & Process Control Blocks (PCB)",
            "CPU Scheduling Algorithms & Metrics",
            "Deadlock Detection, Prevention & Avoidance",
            "Memory Management, Paging & Segmentation",
            "Virtual Memory & Page Replacement Strategies",
          ],
        },
        {
          code: "4330705",
          name: "Responsive Web Page Design",
          type: "Web Development",
          overview:
            "Mastered building responsive, fluid, and mobile-friendly web pages. Implemented modern CSS Flexbox and Grid layouts, responsive typography, media queries, cross-browser compatibility, and accessible interactive interfaces.",
          topics: [
            "Mobile-First Responsive Design Principles",
            "CSS Flexbox & CSS Grid Layouts",
            "CSS Media Queries & Breakpoints",
            "Modern Forms, Inputs & Validations",
            "Web Performance & UI Accessibility",
          ],
        },
      ],
    },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Core Programming Languages",
    badge: "Completed & Verified",
    description:
      "Core languages mastered through coursework, practical labs, and algorithmic problem-solving.",
    skills: [
      {
        name: "C Programming Language",
        level: "Proficient & Completed",
        category: "System & Core Programming",
        status: "completed",
        context:
          "Procedural logic, pointer arithmetic, dynamic memory allocation, and modular algorithmic design.",
        keyTopics: [
          "Pointers & Memory Allocation",
          "Modular Functions",
          "Structures & Unions",
          "File I/O & Arrays",
        ],
      },
      {
        name: "Python Programming",
        level: "Proficient & Completed",
        category: "Scripting & Modern Programming",
        status: "completed",
        context:
          "Core data structures, functional paradigms, string processing, and clean modular scripting.",
        keyTopics: [
          "Data Collections & Dictionaries",
          "Functions & Modules",
          "File Handling & OS",
          "Exception Handling",
        ],
      },
    ],
  },
  {
    title: "Data Structures & Database Systems",
    badge: "Completed & Verified",
    description:
      "Computer science pillars studied thoroughly with end-to-end practical implementations.",
    skills: [
      {
        name: "Data Structures & Algorithms (DSA in C)",
        level: "Proficient & Completed",
        category: "Computer Science Foundation",
        status: "completed",
        context:
          "Linear and non-linear data structures, trees, graphs, and algorithmic complexity in C.",
        keyTopics: [
          "Linked Lists, Stacks & Queues",
          "Trees & Graphs",
          "Sorting & Searching",
          "Time Complexity (Big O)",
        ],
      },
      {
        name: "SQL & Relational Databases (RDBMS)",
        level: "Proficient & Completed",
        category: "Database Engineering",
        status: "completed",
        context:
          "Relational schema design, normalization, complex queries, table joins, and transactional integrity.",
        keyTopics: [
          "Schema Design & ER Modeling",
          "Complex Queries & JOINs",
          "Integrity Constraints",
          "Database Normalization",
        ],
      },
    ],
  },
  {
    title: "Computer Science Systems & Web Technologies",
    badge: "Coursework Completed & Active Interest",
    description:
      "Systems fundamentals from semesters 1, 2, and 3 alongside focused interest in modern web development.",
    skills: [
      {
        name: "Operating Systems & Systems Architecture",
        level: "Coursework Completed",
        category: "Systems & Infrastructure",
        status: "completed",
        context:
          "Process scheduling, virtual memory paging, deadlock prevention, and computer organization.",
        keyTopics: [
          "CPU Scheduling & Processes",
          "Virtual Memory & Paging",
          "Deadlock Prevention",
          "Computer Architecture",
        ],
      },
      {
        name: "Digital Logic Design & Object-Oriented C++",
        level: "Coursework Completed",
        category: "Hardware & OOP",
        status: "completed",
        context:
          "Digital circuits, Boolean algebra, and object-oriented modeling with C++ classes and polymorphism.",
        keyTopics: [
          "Logic Gates & Circuits",
          "Classes & Encapsulation",
          "Inheritance & Polymorphism",
        ],
      },
      {
        name: "Responsive Web Development & UI Design",
        level: "Proficient & Completed",
        category: "Web Engineering",
        status: "completed",
        context:
          "Responsive web design with semantic HTML5, modern CSS Grid/Flexbox, and user-friendly interfaces.",
        keyTopics: [
          "Semantic HTML5",
          "CSS3 Flexbox & Grid",
          "Mobile-First Design",
          "Interactive Layouts",
        ],
      },
      {
        name: "Modern Frontend Ecosystem",
        level: "Active Exploration",
        category: "Future Exploration",
        status: "learning-goal",
        context:
          "Modern JavaScript frameworks, component-based architectures, and practical web tooling.",
        keyTopics: [
          "Modern JavaScript (ES6+)",
          "Component UI Design",
          "Git & GitHub Workflow",
        ],
      },
    ],
  },
];

export const journeyStages: JourneyStage[] = [
  {
    step: "01",
    title: "Engineering & Programming Foundations",
    summary: "Completed Semesters 1 & 2 with core C, C++, and Digital Systems.",
    details:
      "Mastered structured procedural logic in C, object-oriented concepts in C++, digital circuit design, and rigorous engineering mathematics.",
    status: "current",
  },
  {
    step: "02",
    title: "Mastering Core CS: DSA, Python & Databases",
    summary: "Completed Semester 3 including whole DSA in C, Python, and SQL.",
    details:
      "Implemented comprehensive Data Structures & Algorithms (Trees, Graphs, Linked Lists, Stacks, Queues) in C, completed Python scripting, RDBMS with SQL, and operating systems.",
    status: "current",
  },
  {
    step: "03",
    title: "Building Practical Web Applications",
    summary: "Applying computer science foundations into real-world software.",
    details:
      "Combining solid DSA, Python, and SQL foundations with modern responsive web engineering to build, document, and deploy production-quality web applications.",
    status: "next",
  },
];

export const projects: Project[] = [];

export const certificatesData: CertificateItem[] = [
  {
    id: "technoplanet-2025-code-2-web",
    title: "Certificate of Participation",
    type: "National Technical Event",
    eventName: "Code-2-Web",
    symposium: "Technoplanet 2025",
    category: "Web Development",
    recipient: "Bansi Jethva",
    organizer: "RK University, Rajkot",
    date: "September 26, 2025",
    location: "Rajkot, Gujarat",
    officialText:
      "Presented to Bansi Jethva for participating in Code-2-Web at Technoplanet 2025.",
    description:
      "Awarded for participating in the Code-2-Web competition at RK University, demonstrating hands-on web development, responsive UI design, and problem solving under competitive constraints.",
    skillsDemonstrated: [
      "Web Development",
      "HTML & CSS",
      "Responsive Layouts",
      "Problem Solving",
    ],
    supporters: [
      "School of Diploma Studies & Engineering, RK University",
      "Institution's Innovation Council (IIC)",
      "SSIP Gujarat",
    ],
    signatories: [
      {
        name: "Denish Patel",
        designation: "Executive Vice President",
      },
      {
        name: "Dr. Amit Lathigara",
        designation: "Provost",
      },
      {
        name: "Dr. Nirav V. Bhatt",
        designation: "Director, SOE",
      },
    ],
    imagePath: "/images/code-2-web-certificate.jpg",
  },
];
