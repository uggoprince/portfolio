const baseURL = "demo.once-ui.com";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "transalucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Ugo Anayo",
  description:
    "My Portfolio",
};

// default open graph data
const og = {
  title: "Ugo Anayo",
  description: "Software Engineer",
  type: "website",
  image: "/images/me.jpg"
};

// default schema data
const schema = {
  logo: "/images/me.jpg",
  type: "Personal",
  name: "Portfolio",
  description: "",
  email: "",
};

// social links
const social = {
  github: "https://www.github.com/uggoprince",
  linkedin: "https://www.linkedin.com/in/uggoprince",
  discord: "https://discord.com/uggoprince",
};

export { baseURL, style, meta, og, schema, social };
