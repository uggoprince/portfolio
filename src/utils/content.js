import { InlineCode, Tag, SmartLink, Text } from "@/once-ui/components";

const baseURL = "demo.once-ui.com";

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

export const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
};

export const experience = {
  display: true,
  label: "Experience",
  title: "Work experience",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  headline: <>Software engineer and builder</>,
  subline: (
    <>
      I'm Ugo, Software engineer at <InlineCode>Interswitch</InlineCode>, where build intuitive
      <br /> user and business softwares. After hours, I build my own projects.
    </>
  ),
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Interswitch",
        timeframe: "2022 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            As a backend engineer working on the Virtual Card Service that creates virtual cards and manages virtual
            card operations for banks. And also consume the Card Payment API on this service &#20; 
            <SmartLink key={"https://docs.interswitchgroup.com/docs/payment-api"}
              href={"https://docs.interswitchgroup.com/docs/payment-api"}>
                 <Tag variant="accent" size="l" label={"https://docs.interswitchgroup.com/docs/payment-api"} />
                </SmartLink>. (Spring Boot)
          </>,
          <>
              As a mobile engineer working on the Interswitch SmartPOS app (Available on PAX App Store) that runs a
              POS terminal, I built the Verve Loyalty module that enables customers to pay for goods with the verve
              loyalty points using a POS machine. (Kotlin, Android)
              <br />
            <SmartLink key={"https://rewards.myverveworld.com/"} href="https://rewards.myverveworld.com/">
              <Tag variant="accent" size="l" label={"Verve Rewards"} />
            </SmartLink>
          </>,
          <>
            As a frontend working on Bulk Paycode Disbursement for paycode disbursement frontend of both the
            admin and customer portals. (React)
            <br />
            <SmartLink href="https://admin-paycode.myverveworld.com/">
              <Tag variant="accent" size="l" label={"Verve Paycode"} />
            </SmartLink>
            <br /><br />
            <SmartLink href="https://paycode.myverveworld.com/">
              <Tag variant="accent" size="l" label={"Bulk Paycode Disbursement"} />
            </SmartLink>
          </>,
          <><Text variant="font-strong-l">Technologies:</Text> Kotlin, Java, NodeJs, Express, React.</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sterling Bank",
        timeframe: "2020 - 2022",
        role: "Software Developer",
        achievements: [
          <>
            Created and launched the product The Business Hub that provides the following services to customers:
            Register a business, shared space and rentals, business advisory and Access to loans.
            <br />
            <SmartLink href="https://thebusinesshub.ng/">
              <Tag variant="accent" size="l" label={"The Business Hub"} />
            </SmartLink>
          </>,
          "Designed the database and backend architecture.",
          <>
            And after 2 years converted it to microservices to accommodate new services and features in order for the
            app to scale as it was also getting much traffic and difficult to maintain its new size.
          </>,
          <>
            <Text variant="font-strong-l">Technologies:</Text> NodeJs, Express, Postgres, Docker, Azure, RabbitMQ.
          </>
        ],
        images: [],
      },
    ],
  },
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
