export interface Project {
  title: string;
  description: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "College Website",
    description: "College website made using tailwind CSS",
    link: "https://github.com/RoshanMhjn/bfc",
    slug: "bfc",
  },
  {
    title: "Ecommerce Store",
    description: "Ecommerce store made using MERN stack",
    link: "https://github.com/RoshanMhjn/ecommerce",
    slug: "ecommerce",
  },
  {
    title: "Travel Website",
    description: "Simple travel website made using HTML, CSS, JS",
    link: "https://github.com/RoshanMhjn/travel",
    slug: "travel",
  },
  {
    title: "Expense Tracker App",
    description: "Expense Tracker app made using ReactJS",
    link: "https://github.com/RoshanMhjn/expense-tracker",
    slug: "expense-tracker",
  },
  {
    title: "MERN Blog App",
    description: "Blog App made using MERN Stack",
    link: "https://github.com/RoshanMhjn/whimsy-new",
    slug: "mern-blog",
  },
];
