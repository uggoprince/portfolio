export const person = {
    firstName: "Ugo",
    lastName: "Anayo",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: "Software Engineer",
    avatar: "/images/avatar.jpg",
    location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Igbo"], // optional: Leave the array empty if you don't want to display languages
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
