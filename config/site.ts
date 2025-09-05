export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "Developed By Dude",
  name: "Shashank Jaitly",
  alias: "TheProgrammerDude",
  description:
    "Explore my personal portfolio showcasing my work as a full-stack developer, featuring dynamic web applications, innovative projects, and insights into my coding journey.",
  icon: "/theprogrammerdude.jpeg",
  contact: {
    email: "shashank.jaitly.98@gmail.com",
    phone: ["9990295204", "9599784204"],
  },
  timeline: [
    {
      date: "2016",
      title: "College Search",
      subtitle: "Content Developer",
      desc: "I was responsible for generating reviews and updating them over to their website.",
    },
    {
      date: "2017",
      title: "Adway Info Pvt Ltd",
      subtitle: "Content Developer",
      desc: "Adway info is a kolkata based firm, I was responsible for creating content for their website.",
    },
    {
      date: "2017",
      title: "Wordpress Development",
      subtitle: "Started learning software development, especially wordpress",
      desc: "Wordpress was the first tech I learnt, as I wanted to develop my own website to publish content.",
    },
    {
      date: "2019",
      title: "Freelance Development",
      subtitle: "Freelance wordress and react developer",
      desc: "In mid-2019, I began working as a freelance software developer, initially specializing in WordPress websites before transitioning to U.S. application development.",
    },
    {
      date: "2021",
      title: "Crypto Future Trade",
      subtitle: "Crypto Trading Platform",
      desc: "I independently designed and developed a mobile application, successfully launching it on both the Play Store and App Store",
    },
    {
      date: "2023",
      title: "Monocept Consultancy Pvt Ltd",
      subtitle: "Technical Leader @ Monocept",
      desc: "I began my role as a Technical Leader at Monocept Consultancy Pvt Ltd, working on Care Health Insurance projects, including faveo+ and InstaBiz.",
    },
    {
      date: "2024",
      title: "MTAP Technologies Pvt Ltd",
      subtitle: "Sr. Software Developer / Sole Contributor",
      desc: "Focused on development of Commuter app for MTAP Technologies, enhancing logistics and user experience through innovative solutions.",
    },
  ],
  intro:
    "Hi, I'm Shashank, Software and Physics Enthusiast. I'm working both as a freelancer and full time in the software industry.",
  about:
    "I have a degree in Physics (B. Sc. Physics Hons.) from IGNOU, and started working in Software Development industry since I graduated from high school. I've started with basic wordpress websites 🖥️, and made my way to ReactJs in 2017. I started learning web development full fledged in 2016, starting with HTML, CSS and JS, slowly progressing up to JS frameworks and libraries.",
  skills: {
    heading:
      "All of the mentioned skills and os are accumulated over time, learned and mastered on my own. I had no prior knowledge in any of the mentioned technologies, which makes me a Self Taught Programmer",
    base: "I'm proficient in the mentioned operating systems, and I've all of them available with me anytime.",
    tech: [
      "angular",
      "flutter",
      "nuxt",
      "firebase",
      "node",
      "mongodb",
      "rethinkdb",
      "aws",
    ],
  },
  os: ["android", "apple", "linux"],
  projects: [
    {
      url: "https://www.safetrax.in/",
      name: "Safetrax",
      img: "/safetrax.jpg",
      desc: "Safetrax is an employee transport management system that automates employee transport operations and builds a safe office commuting experience.",
      tech: ["flutter", "nodejs"],
    },
    {
      url: "https://www.careinsurance.com/",
      name: "Faveo+ & Instabiz",
      img: "/chi.jpg",
      desc: "Worked as a Technical leader for Care Health Insurance for Faveo+ and InstaBiz applications on both android and ios.",
      tech: ["android", "ios", "react native"],
    },
    {
      url: "https://nearbyyme.web.app/",
      name: "Near by me",
      img: "/nearby.png",
      desc: "An open source personal project to display essential amenities within a certain radius of the user's current location.",
      tech: [
        "react",
        "tailwind",
        "leaflet maps",
        "geolocation",
        "nominatim api",
        "overpass api",
      ],
    },
    {
      url: "https://thehen.io/",
      name: "The Hen",
      img: "/thehen.png",
      desc: "The Hen is a home schooling platform, based in UK. I was responsible for their android and ios applications made using flutter and firebase.",
      tech: ["flutter", "firebase"],
    },
    {
      url: "https://www.cur8.in/",
      name: "Transform+",
      img: "/cur8.png",
      desc: "Developed and Released the official app for Transform+, a Cur8 product on both android and ios platforms.",
      tech: ["ionic", "angular", "moodle", "node.js"],
    },
    {
      url: "https://novac-xi.vercel.app/",
      name: "novac",
      img: "/novac.png",
      desc: "Novac is a daily budget tracker applications, made for everyone to organize their expenses.",
      tech: ["flutter", "firebase", "next.js"],
    },
    // {
    //   url: "https://wthrio.web.app/",
    //   name: "weather.io",
    //   img: "/weather.png",
    //   desc: "Weather PWA built using OpenWeather API.",
    //   tech: ["angular", "tailwind", "firebase"],
    // },
    // {
    //   url: "https://play.google.com/store/apps/details?id=com.cftc.usd",
    //   name: "crypto future trade",
    //   img: "/bull.png",
    //   desc: "Crypto Future Trade is an online crytpocurrency trading platform, having an international userbase.",
    //   tech: ["flutter", "firebase"],
    // },
    {
      url: "https://blackjack-js-three.vercel.app/blackjack.html",
      name: "blackjack",
      img: "/blackjack.png",
      desc: "Balckjack game made to test out general technology skills made in absolute vanilla everthing.",
      tech: ["html", "css", "js"],
    },
    {
      url: "http://cartizoindia.com/",
      name: "cartizo india",
      img: "/cartizo.png",
      desc: "Cartizo India is an online marketplace, where sellers and buyers meet up, just like IndiaMart.",
      tech: ["wordpress"],
    },
  ],
  links: [
    {
      name: "youtube",
      url: "https://www.youtube.com/channel/UCWA7UTHFX13sJzTCfTjE2_w",
    },
    { name: "linkedin", url: "https://www.linkedin.com/in/theprogrammerdude/" },
    { name: "instagram", url: "https://www.instagram.com/theprogrammerdude/" },
    { name: "github", url: "https://github.com/theprogrammerdude" },
  ],
};
