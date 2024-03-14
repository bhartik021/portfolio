import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitImage2,
    instagram,
    notion,
    htmlcsslogo,
    javascriptlogo,
    reactlogo,
    nodelogo,
    mongodblogo,
    azurelogo,
    cpplogo,
    project1,
    project2,
    project3,
    project4,
    telegram,
    twitter,
    linkedin,
    github,
    gmail,
    geeksforgeeks,
    scaler,
    tutorialspoint,
    peppercontent,
    proelevate,
    bharti,
    bhartiIcon,
  } from "../assets";

  export const navigation = [
    {
      id: "0",
      title: "About",
      url: "#about",
    },
    {
      id: "1",
      title: "Services",
      url: "#services",
    },
    {
      id: "2",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "3",
      title: "Blogs",
      url: "#blogs",
      onlyMobile: true,
    },
    {
      id: "4",
      title: "Resume",
      url: "#resume",
      onlyMobile: true,
    },
  ];
  
  export const companyLogos = [geeksforgeeks, scaler, tutorialspoint, peppercontent, proelevate];
  
  export const projects = [
    {
      id: "0",
      title: "MovieHub",
      text: "Movie Hub is a Web Application that is developed using ReactJS and OMDb API that fetches movies information from the API.",
      date: "January 2022",
      status: "done",
      imageUrl: project4,
      url: "https://github.com/bhartik021/movie-hub",
    },
    {
      id: "1",
      title: "SummarizeMe",
      text: "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
      date: "April 2023",
      status: "done",
      imageUrl: project1,
      url: "https://github.com/bhartik021/summarizeme",
    },
    {
      id: "2",
      title: "Linktree",
      text: "A Linktree is a web page which consists stack of social media links and developed using Reactjs and Tailwind CSS with a Modern UI.",
      date: "March 2024",
      status: "done",
      imageUrl: bhartiIcon,
      url: "https://github.com/bhartik021/linktree",
    },
    {
      id: "3",
      title: "Scrap Ninja",
      text: "Developed using Next.js and Bright Data's web-unlocker, this e-commerce product scraping site is designed to assist users in making informed decisions. It notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.",
      date: "March 2024",
      status: "progress",
      imageUrl: project3,
      url: "https://github.com/bhartik021/scrap-ninja",
    },
  ];
  
  export const collabText =
    "My job is to develop your website or create technical content so that it is functional and user-friendly. I created Technical Content for many famous brand companies.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Learn About Me",
      text: "I'm Software Developer and Technical Writer from Kota, Rajasthan, India, working at Scaler as Technical Writer. I enjoy turning complex problems into simple, solutions.",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "HTML/CSS",
      icon: htmlcsslogo,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Javascript",
      icon: javascriptlogo,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "React",
      icon: reactlogo,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "NodeJs",
      icon: nodelogo,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "MongoDB",
      icon: mongodblogo,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Azure",
      icon: azurelogo,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Notion",
      icon: notion,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "CPP",
      icon: cpplogo,
      width: 38,
      height: 32,
    },
  ];
  
  export const services = [
    {
      id: "0",
      title: "Technical Writing",
      text: "Clear, concise content tailored to your audience's needs. Enhance communication with expert documentation.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Web Development",
      text: "Customized websites built with precision, functionality, and user experience in mind. Elevate your online presence.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Community Building",
      text: "Foster connections and engagement through strategic initiatives and inclusive platforms. Cultivate thriving online communities.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "LinkedIn",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/in/bhartik021/",
    },
    {
      id: "1",
      title: "GitHub",
      iconUrl: github,
      url: "https://github.com/bhartik021",
    },
    {
      id: "2",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://twitter.com/bhartik021",
    },
    {
      id: "3",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/bhartik021/",
    },
    {
      id: "4",
      title: "Gmail",
      iconUrl: gmail,
      url: "mailto:bhartik021@gmail.com",
    },
    {
      id: "5",
      title: "Telegram",
      iconUrl: telegram,
      url: "https://t.me/kumari_bharti",
    },
  ];