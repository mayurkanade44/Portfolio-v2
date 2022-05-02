import react from "../images/react.png";
import python from "../images/python.png";
import bs from "../images/bootstrap.png";
import django from "../images/django.png";
import node from "../images/nod.png";

import cal from "../images/calories.png";
import jr from "../images/jr.png";
import portfolio from "../images/portfolio.png";
import cbdp from "../images/CBDP.png";
import contract from "../images/contract.png";

export const language = [
  {
    id: 1,
    img: bs,
    name: "Bootstrap",
  },
  {
    id: 2,
    img: node,
    name: "Node JS",
  },
  {
    id: 3,
    img: react,
    name: "React JS",
  },
  {
    id: 4,
    img: django,
    name: "Django",
  },
  {
    id: 5,
    img: python,
    name: "Python",
  },
];

export const projects = [
  {
    id: 1,
    img: contract,
    title: "Contract QR",
    description:
      "Contract-QR is MERN stack web app, used by Express Pesticides Pvt Ltd to create a pest control contract and service cards for clients. Each service card has unique QR code, which helps service operator to quickly & easily update the status after the service.",
    website: "https://contractqr.herokuapp.com",
    github: "https://github.com/mayurkanade44/Contract-QR",
  },
  {
    id: 2,
    img: cbdp,
    title: "CBDP",
    description:
      "CBDP is Cloud Based Documents Portal made with React & Django. It is used by Express Pesticides Pvt Ltd for sending MSDS, TC & SOP documents of various pest services to clients with inbuilt emailing function.",
    website: "http://cbdp.herokuapp.com/",
    github: "https://github.com/mayurkanade44/CBDP",
  },
  {
    id: 3,
    img: cal,
    title: "Calories Monitor",
    description:
      "Calories Monitor is help you to keep track of your daily calories. Site made with React frontend and Django backend API hosted on heroku. JWT is used for authentication and authorization.",
    website: "https://calories-monitor.herokuapp.com/",
    github: "https://github.com/mayurkanade44/Calories-Monitor",
  },
  {
    id: 4,
    img: jr,
    title: "Jersey Republic",
    description:
      "Small scale e-commerce fully responsive websites for football jerseys, hosted on Netlify, made with React, Bootstrap, serverless API using Airtable and Netlify CLI.",
    website: "https://jersey-republic.netlify.app/",
    github: "https://github.com/mayurkanade44/Jersey-Republic",
  },
  {
    id: 5,
    img: portfolio,
    title: "Portfolio",
    description:
      "React based full responsive portfolio. Used Bootstrap 5 for CSS, it has multiple pages routed through React-Router-6.",
    website: "https://github.com/",
    github: "https://github.com/",
  },
];
