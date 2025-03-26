export const person = {
    firstName: "Ugo",
    lastName: "Anayo",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: "Software Engineer",
    avatar: "/images/me.jpg",
    location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", /*"Igbo", "Pidgin"*/], // optional: Leave the array empty if you don't want to display languages
};

export const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/uggoprince",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/uggoprince",
    },
    // {
    //   name: "X",
    //   icon: "x",
    //   link: "",
    // },
    // {
    //   name: "Email",
    //   icon: "email",
    //   link: "mailto:example@gmail.com",
    // },
  ];

export const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
      display: true,
      subItems: false,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          Ugo is a Full-stack software engineer, who develops robust code and applications using languages such as
          Java, React, Node.js, and PostgreSQL, consistently delivering projects that have increased user
          engagement.
          A dynamic, resilient professional with a positive attitude, and a deep creative thinker.
        </>
      ),
    },
  };

export const techStack = {
  display: true,
  title: 'Tech Stack',
  stacks: {
    FrontEnd: ['JavaScript', 'React.js',
      'TypeScript', 'HTML5', 'GraphQl (Apollo Client)', 'Vite', 'CSS3', 'TailwindCss'],
    BackEnd: ['Spring Boot', 'Java', 
      'JavaScript', 'Node.js', 'TypeScript', 'Express', 'GraphQl', 'Microservices', 'REST API', 'RabbitMQ'],
    Mobile: ['Android', 'Kotlin', 'Java'],
    'Data Stores': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
    'Web Servers': ['Nginx' ,'Microsoft Azure', 'Docker', 'Kubernetes', 'Apache Tomcat', 'Apache HTTP Server', 'Heroku', 'Render'],
    AI: ['Open AI', 'Qwen', 'Deepseek', 'Anthropic'],
    'Operation Systems': ['macOs', 'Windows', 'Linux']
  }
};

export const education = {
  display: true,
  title: 'Education',
  schools: [{
    school: 'Federal University of Technology Owerri',
    course: 'Mathematics'
  }]
};
