import { InlineCode, Tag, SmartLink, Text } from "@/once-ui/components";

const baseURL = "ugo-anayo.vercel.app";

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
      I'm Ugo, Software engineer at <InlineCode>Interswitch</InlineCode>, building intuitive
      <br /> user and business softwares. After hours, I work my own projects.
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
  work2: {
    display: true,
    title: "Other Experiences",
    experiences: [
      {
        company: "Innocent Comprehensive High School | Lagos - Nigeria",
        timeframe: "2018 - 2019",
        role: "Data Processing Tutor",
      },
      {
        company: "Self Employed | Nigeria",
        timeframe: "2017 - 2018",
        role: "Software Developer",
      },
      {
        company: "National Youth Service | Rivers - Nigeria",
        timeframe: "2016 - 2017",
        role: "Corps Member",
      },
    ]
  }
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
      link: "https://calendly.com/uggoprince",
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

export const projects = {
  display: true,
  label: "Projects",
  title: "SIDE PROJECTS",
  work: [
    {
      title: "HomeSpace",
      description: `HomeSpace is an app where you search and find properties you want to rent. It is an idea I am working on still in
        the development phase.`,
      about: [
        <>
          Link:&nbsp;
          <SmartLink key={"https://homespace.vercel.app"} href="https://homespace.vercel.app">
            <Tag variant="accent" size="l" label={"https://homespace.vercel.app"} />
          </SmartLink>
        </>,
        <>
          Bankend server:&nbsp;
          <SmartLink key={"https://homespace-xrgv.onrender.com/graphql"} href="https://homespace-xrgv.onrender.com/graphql">
            <Tag variant="accent" size="l" label={"https://homespace-xrgv.onrender.com/graphql"} />
          </SmartLink>
        </>,
        "The Frontend is built with React and GraphQl using apollo client",
        "The Backend is built with NodeJS and GraphQl using apollo server express",
        "The CSS framework is Tailwind CSS."
      ]
    },
    {
      title: "Journal App",
      description: "Journal is an all purpose note app. Used for writing and saving notes.",
      about: [
        <>
          apk:&nbsp;
          <SmartLink key={"https://play.google.com/store/apps/details?id=com.journalingapp"}
            href="https://play.google.com/store/apps/details?id=com.journalingapp">
            <Tag variant="accent" size="l" label={"Journal - Google Play"} />
          </SmartLink>
        </>,
        "It uses SQLite DB to save lyrics and SharedPreferences to save last searched data"
      ]
    },
    {
      title: "Lyrics App",
      description: "Lyrics is an android app that helps users search for the lyrics of any song.",
      about: [
        <>
          apk:&nbsp;
          <SmartLink key={"https://play.google.com/store/apps/details?id=com.ugo.lyrics"}
            href="https://play.google.com/store/apps/details?id=com.ugo.lyrics">
            <Tag variant="accent" size="l" label={"Lyrics - Google Play"} />
          </SmartLink>
        </>,
        "It uses SQLite DB to save lyrics and SharedPreferences to save last searched data"
      ]
    },
    {
      title: "AutoMart",
      description: "AutoMart is an app where individuals can buy and sell cars.",
      about: [
        <>
          Web Link:&nbsp;
          <SmartLink key={"https://automart-v2.netlify.app"}
            href="https://automart-v2.netlify.app">
            <Tag variant="accent" size="l" label={"https://automart-v2.netlify.app"} />
          </SmartLink>
        </>,
        <>
          API Link:&nbsp;
          <SmartLink key={"https://automart-2-0-api.onrender.com/api"}
            href="https://automart-2-0-api.onrender.com/api">
            <Tag variant="accent" size="l" label={"https://automart-2-0-api.onrender.com/api"} />
          </SmartLink>
        </>,
        "Built with NodeJS and Express.",
        "Database is MongoDB"
      ]
    }
  ]
};
