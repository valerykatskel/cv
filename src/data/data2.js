export const Header = {
  name: "Valery Katskel",
  location: "Minsk (Belarus)",
  position: "Frontend Team Lead",
  sex: "Male",
  yob: "Oct 9, 1983",
  degree: "B.A.",
};

export const Summary = {
  text: `I worked as a Frontend Engineer on scalable international projects. I have experience writing applications on Vue.js using various related technologies, such as Vuex, Vuetify, Nuxt and etc. `,
};

export const Contact = [
  {
    key: "E-mail:",
    value: "valerykatskel@gmail.com",
  },
  {
    key: "Phone/WhatsApp/Telegram/Viber",
    value: "+375297688632",
  },
  {
    key: "Skype:",
    value: "bestnickname",
  },
];

export const Achievements = [
  "<strong>16+ years</strong> experience in IT and <strong>over 12 years</strong> of commercial development in Frontend",
  "experience in developing high-load applications with a peak load of more than <strong>3000 requests per minute</strong>",
  "a project on native JavaScript (<i>Require.js, jQuery</i>) was rewritten to React (<i>Redux Toolkit, Styled Components, TypeScript, react-i18next</i>), which allowed for predictable project enhancements estimation and reduced the time spent on fixes <strong>by 50%</strong>",
  "a tightly coupled project (<i>.NET6 + jQuery + native JavaScript</i>) was split into separate frontend and backend, updating the tech stack to React ecosystem and switching to REST, which <strong>increased</strong> the speed of both backend and frontend teams <strong>by 25%</strong> due to the elimination of unnecessary dependencies",
  "analysis of existing React dashboards for managing JAVA services and extracting common components into a separate npm library, which accelerated the development time of typical company dashboards by <strong>10%</strong> and reduced the amount of duplicative code by reusing common components",
];

export const Experience = [
  {
    id: 1,
    name: "iFuture",
    location: "Minsk, Belarus",
    position: "Frontend Team Lead",
    start: "May 2023",
    end: "April 2024",
    type: "Full-time",
    descriptionHeader:
      "The company iFuture was founded by professionals with many years of experience in the field of information technology.",
    description: `<p>My responsibilities:</p>
    <ul>
      <li>mentoring new employees and conducting regular meetings throughout their adaptation period</li>
      <li>creating a competency matrix to assess the strengths and weaknesses within the team</li>
      <li>reviewing the team's commits to ensure code quality and consistency</li>
      <li>analyzing the existing codebase to identify redundant components and code, and encapsulating them into an npm library for efficient reuse in development</li>
      <li>conducting personalized 1-to-1 meetings with team members to discuss progress and address concerns</li>
    </ul>
    <p>I employ React as the primary library for UI rendering, complemented by Material UI for the component suite. Artifactory serves as our local repository for npm packages and build artifacts. Additionally, Atlassian Bamboo is utilized for constructing projects, formulating build plans, and orchestrating deployment strategies.</p>`,
  },
  {
    id: 2,
    name: "Social Discovery Ventures",
    location: "Minsk, Belarus",
    position: "Frontend Team Lead",
    start: "May 2022",
    end: "May 2023",
    type: "Full-time",
    descriptionHeader:
      "Social Discovery Ventures is a collection of unique online brands which enable people around the globe to discover each other through the power of shared interests and mutual benefit.",
    description: `<p>My responsibilities:</p>
    <ul>
    <li>conducting regular personalized 1-to-1 meetings with team members to foster professional growth and address individual concerns</li>
    <li>mentoring new employees, guiding them through their initial experience and integration into the team</li>
    <li>performing thorough code reviews of merge requests submitted by the team to ensure adherence to coding standards and best practices</li>
    <li>making key architectural and technological decisions within the team during project development phases</li>
    <li>breaking down complex technical tasks into manageable subtasks and accurately estimating timelines and resources required</li>
    <li>strategically planning the roadmap for technological stack updates to enhance development efficiency and product scalability</li>
    </ul>
    <p>I employ React as the primary library for developing applications, leveraging various elements of the React ecosystem such as Redux Toolkit for predictable state management, and asyncThunk for handling diverse asynchronous operations that integrate results into the state. Following a technology stack upgrade, we transitioned to utilizing Websockets for chat functionalities, with backend implementations powered by SignalR for .Net.</p>`,
  },
  {
    id: 3,
    name: "Social Discovery Ventures",
    location: "Minsk, Belarus",
    position: "Senior Frontend Engineer",
    start: "Nov 2020",
    end: "May 2022",
    type: "Full-time",
    descriptionHeader:
      "Social Discovery Ventures is a collection of unique online brands which enable people around the globe to discover each other through the power of shared interests and mutual benefit.",
    description: `<p>My responsibilities:</p>
    <ul>
      <li>maintaining legacy JavaScript code, including Require.js and AMD modules</li>
      <li>transitioning logic and functionality from AMD modules to ES6 modules</li>
      <li>refactoring, updating, and developing new functionalities for products such as anastasiadate.com and asiandate.com</li>
      <li>implementing technical specifications to enhance product features</li>
      <li>diagnosing and resolving bugs to improve system stability</li>
      <li>optimizing existing code to enhance performance and maintainability</li>
    </ul>
    <p>In my professional capacity, I utilize <strong>HTML</strong> for markup and <strong>Less</strong> for styling. On the backend, we employ .Net. For frontend development, we use React for new projects and native JavaScript, including AMD modules and Require.js. Additionally, our products leverage WebRTC for chat functionalities.</p>
    <p>Я специализируюсь на деобфускации кода с элементами реверс-инжиниринга, применяя глубокий анализ абстрактного синтаксического дерева (AST) для восстановления исходной структуры запутанного кода. Разрабатываю собственные инструменты для автоматизации процесса деобфускации, позволяющие эффективно анализировать сложные паттерны обфускации и выявлять скрытые функциональности. Мой опыт включает работу с различными техниками защиты JavaScript-кода и методами противодействия анализу веб-приложений.</p>`,
  },
  {
    id: 4,
    name: "TUT.BY",
    location: "Minsk, Belarus",
    position: "Frontend Developer",
    start: "Dec 2013",
    end: "Nov 2020",
    type: "Full-time",
    descriptionHeader:
      "TUT.BY group of companies (from 2000 to 2021), ≈300 employees, regional offices in all regions of Belarus. Reporting directly to the Chief Engineer, member of the Board of Directors of the company.",
    description: `<p>My responsibilities:</p>
    <ul>
    <li>Development and enhancement of new blocks, sections, and pages for the web portal using HTML and JavaScript</li>
    <li>Continuous updates, edits, and additions of new functionalities</li>
    <li>Refactoring of legacy code to improve maintainability and performance</li>
    <li>Creation of various interactive applications and widgets for integration into a news page, such as voting systems, step-by-step quizzes, and interactive forms</li>
  </ul>
  <p>A significant number of interactive games and quizzes have been successfully completed, along with affiliate materials.</p>
  <p>In my professional role, I utilize <strong>HTML</strong> and <strong>Pug</strong> for markup, <strong>Less</strong> for styling. <strong>Vue.js</strong> serves as the primary framework for developing various applications, supplemented by native <strong>JavaScript</strong> and <strong>jQuery</strong> for functionalities where <strong>Vue.js</strong> is not applicable.</p>`,
  },
  {
    id: 5,
    name: "Altoros Development",
    location: "Minsk, Belarus",
    position: "Frontend Developer",
    start: "Feb 2012",
    end: "Nov 2013",
    type: "Full-time",
    descriptionHeader:
      "Altoros is a premier IT services provider that has supported over 50 Global 2000 organizations, with approximately 350 employees across 5 global offices. I reported directly to the Frontend Resource Manager.",
    description: `<p>During my brief tenure at the company, I contributed as a Frontend Developer to <strong>5 diverse projects</strong>.</p>
    <p>These projects catered to clients from diverse countries, including <strong>Norway</strong> and <strong>the USA</strong>. The project themes varied widely, ranging from a web application for potential breast cancer detection in women to a social network for creative professionals like musicians, artists, and singers, as well as services for scheduling veterinary appointments.</p>
    <p>My responsibilities included:</p>
    <ul>
    <li>Developing page layouts based on completed designs using <strong>Photoshop</strong> and <strong>Sketch</strong></li>
    <li>Building application functionality employing the <strong>MVC</strong> paradigm with <strong>backbone.js</strong> as the primary JavaScript library</li>
    <li>Working with <strong>RESTful JSON</strong> interfaces</li>
    <li>Creating application features using <strong>CoffeeScript</strong></li>
    </ul>
    <p>Technologies I utilized included CoffeeScript and JavaScript for core functionality, <strong>Haml</strong> for markup, and <strong>SASS</strong> and <strong>SCSS</strong> for styling. My experience also extends to frameworks and libraries such as Backbone.js and Apache Cordova.</p>`,
  },
  {
    id: 6,
    name: "Finance Ministry's Data Processing Center of the Republic of Belarus",
    position: "Software Engineer",
    location: "Minsk, Belarus",
    start: "Aug 2008",
    end: "Jan 2012",
    type: "Full-time",
    descriptionHeader: `The unitary enterprise "Finance Ministry's Data Processing Center of the Republic of Belarus" has been providing services for automation, development, and maintenance of software systems for more than 50 years`,
    description: `<p>My responsibilities included:</p>
    <ul>
      <li>development and maintenance of the website www.ivcmf.by</li>
      <li>creation of custom modules for a website running on <strong>MODx CMS</strong>, utilizing <strong>PHP</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong> for functionalities such as license verification and software updates</li>
      <li>enhancement and support of new functionalities for generating and delivering reports for insurance companies of the Republic of Belarus to the Ministry of Finance in Excel format</li>
      <li>formulation and execution of <strong>SQL</strong> queries and operations with <strong>MSSQL</strong></li>
    </ul>`,
  },
];

export const CoverLetter = `
<p>Dear Hiring Manager,</p>
<p>I would like to express my interest in the Front End Engineer position. I am a self-motivated and progress-driven Front End Engineer with an extensive background in this industry. With a long-standing record of initiative and innovation, I have developed and executed strategies that I believe will bring value to Checkout.com. </p>
<p>Throughout the course of my career, I have honed my abilities in compliance and quality control. I am an astute problem-solver capable of prioritizing and managing complex projects with proficiency.</p>
<p>In my previous role, I exercised skills in motivation, problem-solving and process development and consistently contributed to team efforts and organizational improvements. I am open-minded and focused on new developments in my field. I have proven to be effective and motivational, with proficiency in teamwork and collaborative work. I enjoy brainstorming and coordinating efforts to achieve a common goal.</p>
<p>Please take a moment to review my enclosed resume and accompanying credentials. I would appreciate the opportunity to speak with you regarding my candidacy for the Front End Engineer role. I am looking forward to your response and thank you for your consideration.</p>
<p>Sincerely,
Valery Katskel</p>
`;

export const Education = [
  {
    id: 1,
    name: "Polotsk State University",
    position: "Bachelor of information technology",
    start: "2003",
    end: "2008",
    description: `Passed the state exam in the specialty with an assessment of SEVEN and defended a graduation project for 9 points out of 10.`,
  },
];
export const Skills = [
  "Languages: <strong>English (B2)</strong>, EF SET English certificate <a href='https://www.efset.org/cert/E8BLq3'>https://efset.org/cert/E8BLq3</a>",
  "JavaScript (ES6+), Vue.js (Vuex, Nuxt.js), React.js (Redux Toolkit, Styled Components), REST, AMD, CommonJS, Require.js, WebRTC, WebSockets (Socket.io, SignalR adapter for .Net backend)",
  "Node.js, REST, MongoDB",
];

export const Certifications = [
  {
    id: 1,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQE0iRUqSJueUw/company-logo_100_100/0?e=1601510400&v=beta&t=ywN-hQPlpWAdbDClxRcOIRLthOyFMOEh92Sns0OtSR8",
    name: "EF Standard English Test (EF SET)",
    company: "EF Standard English Test (EF SET)",
    issued: "Jan 2020",
    description: "efset.org/cert/E8BLq3 | B2 Upper Intermediate | 56/100",
  },
  {
    id: 2,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "JavaScript and JSON: Integration Techniques",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AdpyyJxmdIhTequ-hJcsdbMM1EPT",
  },
  {
    id: 3,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Interactive Animations with CSS and JavaScript",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AelcWWNIDP9RpcsRviUMb1xQMn8A",
  },
  {
    id: 4,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React: Ecosystems",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AS-6WG2d0wGECdMSF7pxx53BTUBd",
  },
  {
    id: 5,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning ECMAScript 6",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ATEH7tbYcD2Zo3cBBfNpJrWbDLyP",
  },
  {
    id: 6,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Vue.js: Building an Interface",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AZ0pqA8CSd4YJ_8R_qguGt39DAct",
  },
  {
    id: 7,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "CSS: Animation",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AYiJIYSB_cf2Mt5x96TWf5-BqjTo",
  },
  {
    id: 8,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning webpack 4",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AYykgGIW6pXsduYT-KS4IZnnOVr6",
  },
  {
    id: 9,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning Web Audio and Video",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Ae-qCFu6ooonxYX30v-c0mJJLFb6",
  },
  {
    id: 10,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "MEAN Stack and MongoDB: Development Techniques",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AcCDxxyJfSaqfcOtgof44SXDbFd2",
  },
  {
    id: 11,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "JavaScript: Async",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ASuwDPspi3oggLRaC90IrRjctUhF",
  },
  {
    id: 12,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "JavaScript: Closures",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AUCrkY1fsBIfSAC2Yf9K_thysNBO",
  },
  {
    id: 13,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "JavaScript: Best Practices for Code Formatting",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AXwFMj5S5_-buowwDRhIFJ7JClKw",
  },
  {
    id: 14,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "JavaScript: Scope",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AV2Dcg-wYLHVipTyzlEPp7Fje-GQ",
  },
  {
    id: 15,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "CSS Layouts: From Float to Flexbox and Grid",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Aa3LzWEq054tj2VtHNWM_JEsh_8K",
  },
  {
    id: 16,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning Functional Programming with JavaScript ES6+",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AY10rv1aOeg4xmRmbeSh8fPZbjNS",
  },
  {
    id: 17,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Building RESTful APIs with Node.js and Express",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Abi3L5ZS-to3oYpiEu2bA5Ux1R10",
  },
  {
    id: 18,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Building a Website with Node.js and Express.js (2018)",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AfRXoYKV7nLMH5AdAe8IBMcKXo4a",
  },
  {
    id: 19,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Isomorphic JavaScript with MEVN Stack",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AZKV8ODjVevpiftg_Kj-_ppFSSN6",
  },
  {
    id: 20,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning Vue.js",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AR73LeLOGVa6q3SU5nnyFEIijFdO",
  },
  {
    id: 21,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Vue.js Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AW6akHqcdGLza9CuHmPpLDv8zqvM",
  },
  {
    id: 22,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning TypeScript",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AWi26JzzsZLnHFMv_TUK73c5tzMi",
  },
  {
    id: 23,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Vue.js: Full-Stack Applications with Firebase",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ATKXSko9Ukkl5MHJAmiK3ZubJl97",
  },
  {
    id: 24,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning Vuex",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AcLkHODdV4ZYtryy0qFyQMj0-_pR",
  },
  {
    id: 25,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Become a Vue.js Developer",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AcMtyXP63SZqHLu8HorD89l4GfZf",
  },
  {
    id: 26,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "JavaScript Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AVeypa48YjgSBbt3Otbx1TmIzvIt",
  },
  {
    id: 27,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning the JavaScript Language",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AXSZ0Q_M35j9ZRK_sy9E9x36onU3",
  },
  {
    id: 28,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React: Creating and Hosting a Full-Stack Site",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Ae_VUDAzvaqiy6jJM_6H2N2tIid0",
  },
  {
    id: 29,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Bootstrap 4 Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Ae2s0Slg0AK7i8rnJoSLVGyQWsyA",
  },
  {
    id: 30,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Vue.js: Working with APIs",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AeQ-lOJ6OqUtTp-LQJT38ukeYxGZ",
  },
  {
    id: 31,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Succeeding in Web Development: Full Stack and Frontend",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AcbYOEhbGGg62xEJSDCQ2_aGJjeR",
  },
  {
    id: 32,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Web Programming Foundations",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Ac5YFN7q3mrp9d-EfYGvmC8_bCPt",
  },
  {
    id: 33,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "CSS Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Adn1WudDigHxOoClakWGjMG0utqT",
  },
  {
    id: 34,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Programming Foundations: Fundamentals",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AZ3HLTXQHXRDHbd3C_KxnpWvxCco",
  },
  {
    id: 35,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "UX Foundations: Accessibility",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AfjJLxs_pv3Gb1FxBcboNmi7siDu",
  },
  {
    id: 36,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Sass Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AX3EFluXz0b9MWV-fKepSWlhRlU5",
  },
  {
    id: 37,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "HTML Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Afbfd-Pv3ejh3eUxzlTkzxTyAiJI",
  },
  {
    id: 38,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning React.js",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Abi3xOp7620vpcSP-vUTnIB2bxSP",
  },
  {
    id: 39,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning GitHub",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ARVLmzU4EN54x8m_iGt3b_rn4I03",
  },
  {
    id: 40,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Responsive Layout",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AZiI-RawI8VhaVlmMPrXNX4oGXke",
  },
  {
    id: 41,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Become a Frontend Web Developer",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AULAMH3ODlKiinYPJge5PqLcMwW4",
  },
  {
    id: 42,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "CSS: Advanced Layouts with Grid",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AZJzHRscXiK7VSP2IJTqWtNBojzs",
  },
  {
    id: 43,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "User Experience for Web Design",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AfjJLxs_pv3Gb1FxBcboNmi7siDu",
  },
  {
    id: 44,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "MERN Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AaOG1nzrpYUNQCm6kzBE6r34DCAW",
  },
  {
    id: 45,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Angular: Building an Interface",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Aa3ZZ-fDPENXyPhPgGjNTEr83tSG",
  },
  {
    id: 46,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React.js Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AW_6iPDLJe55woZTgOBryd7oG9U_",
  },
  {
    id: 47,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Webpack for React Applications",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AYj2hi-4nGXU79y2ctvrbudBcndE",
  },
  {
    id: 48,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React: Using TypeScript",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AfXdW5reXJt2HipLGuAddixQxClt",
  },
  {
    id: 49,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React: Building Large Apps",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AWzwv6ESWQw5sLc632V1uitPJVd2",
  },
  {
    id: 50,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React: Replacing Legacy Projects",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ATYxeY65xUr4R2CkFtUN9YOoMiUE",
  },
  {
    id: 51,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React: Testing and Debugging",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AYgSNhY4GKzqUSJa1PF0UhyhEAAL",
  },
  {
    id: 52,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "React for Web Designers",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ATMsuac6Wc2WhwX5raLYJFG1FcGl",
  },
  {
    id: 53,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Gulp.js: Web Project Workflows",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID Abt9BcXJaHYndPer8MutKHml4_W6",
  },
  {
    id: 54,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "JavaScript: Modern Browser APIs",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ARo3Dz5e8YogE32BpQ4O-aSsKf7t",
  },
  {
    id: 55,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "TypeScript: Upgrades and Features",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AXJhyuClWe8FneEyP1d8bCQapZXZ",
  },
  {
    id: 56,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Learning Functional Programming with JavaScript",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID ATh8cD14cjdNlocda5rHjytx8aTh",
  },
  {
    id: 57,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "Vanilla JavaScript: Client-Side Data Storage",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AeAqZKojaPCCec3Yx9pIa2Fr7WNP",
  },
  {
    id: 58,
    img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1601510400&v=beta&t=q6BmTUrPzrNdHaXnFWIYLZRz7tC3ji_UxUXZNTks_u8",
    name: "TypeScript Essential Training",
    company: "LinkedIn",
    issued: "Jan 2020",
    description: "Credential ID AYwROc8Yh8cBov41ZO-gf2uAoSRw",
  },
];

export const Projects = [
  {
    id: "1",
    name: "Expandable banner for smart devices (phone, tablet and so one)",
    start: "Dec 2019",
    end: "Feb 2020",
    description: `A small and funny banner for mobile devices only. You can tap on the small picture or pull a small picture down in order to show a big picture. Also, you can tap on a button to expand the banner (show a big picture).`,
    url: "https://valerykatskel.github.io/expandable-banner/",
  },
  {
    id: "2",
    name: "Resistance is futile",
    start: "Sep 2019",
    end: "Sep 2019",
    description: `This is a special project on the TUT.BY portal - the stories of people who reported police violence in Belarus.`,
    url: "https://special.tut.by/status/soprotivlenie_bespolezno/",
  },
  {
    id: "3",
    name: "Greeting card with a holiday on March 8",
    start: "Mar 2019",
    end: "Mar 2019",
    description: `This is a greeting card to congratulate women with international woman day from Belorussian men-celebrities.<br />Here you can read about this more: http://marketing.by/keysy/muzykalnye-klipy-angely-i-vosmerka-iz-zontov-kak-belaruskie-kompanii-pozdravlyayut-zhenshchin/`,
    url: "https://valerykatskel.github.io/tut-2019-8march-js/",
  },
  {
    id: "4",
    name: "Christmas' slot",
    start: "Dec 2018",
    end: "Dec 2018",
    description: `A modified slot machine idea was implemented in an interactive online postcard for all portal users. Actually, this is a greeting generator for a happy new year.
        <br />source: https://github.com/valerykatskel/happy-new-year-2019
        <br />info: http://marketing.by/keysy/tut-by-zapustil-interaktivnye-predskazaniya-na-budushchiy-god-s-simvolami-belaruskogo-ornamenta/`,
    url: "https://www.tut.by/NY2019/",
  },
  {
    id: "5",
    name: `Special project of the web portal TUT.BY "City Day, Minsk is 950 years old"`,
    start: "Sep 2017",
    end: "Sep 2017",
    description: `The capital of Belarus, the city of Minsk, celebrates its 950th anniversary in 2017. TUT.BY released a special project especially for this date. A special project tells several stories related to the life of the city.`,
    url: "https://news.tut.by/tag/2450-den-goroda.html",
  },
  {
    id: "6",
    name: "Tic tac toe game on JavaScript",
    start: "Aug 2016",
    end: "Aug 2016",
    description: `A small game tic tac toe. Unlike the standard 5x5 game area, the test task had a condition that the playing field should have a size of 19x19. The winner is determined when 5 crosses or 5 zeroes are crossed out. One of the conditions of the assignment was not to use any framework.`,
    url: "https://valerykatskel.github.io/tic-tac-toe/",
  },
  {
    id: "7",
    name: "Mezuka LLC",
    start: "Feb 2015",
    end: "May 2015",
    description: `Stack of technologies: Ruby, Angular, Sass, Haml.
        <br />I was responsible for creating new HTML markups (email templates included), make some changes in Angular directives.
        <br />Here is some examples of my html markup for email templates: https://valerykatskel.github.io/valprojects.mezuka-mail/`,
    url: "http://mezuka.com",
  },
  {
    id: "8",
    name: "Bubbleboom.by",
    start: "Oct 2014",
    end: "Oct 2014",
    description: `Unfortunately, this project is no longer alive, but work (HTML markup) was done and you can see it in my GitHub repository https://github.com/valerykatskel/valprojects.bubbleboom`,
    url: "https://valerykatskel.github.io/valprojects.bubbleboom/",
  },
  {
    id: "9",
    name: "MIBS Travel",
    start: "Apr 2010",
    end: "Nov 2013",
    description: `Currently, on the specified domain, you can see a web site after the redesign. But you can see saved version on web.archive.org which I've developed later here:
        <br />web.archive.org/web/20110816120552/http://www.mibs.ru`,
    url: "http://www.mibs.ru/",
  },
  {
    id: "10",
    name: "decor-v-dom.ru",
    start: "Aug 2013",
    end: "Aug 2013",
    description: `This was a small landing page. Nowadays this company is no longer alive by original domain thatsway you can see it on my github pages`,
    url: "https://valerykatskel.github.io/valprojects.decor-v-dom/",
  },
  {
    id: "11",
    name: "Nekos, the Advertising agency",
    start: "Jan 2013",
    end: "Jun 2013",
    description: `While working on this project, I served as a full-stack developer. Frontend (HTML layout + jQuery) Backend (MODx, MySQL database)`,
    url: "http://nekos.ru/",
  },
  {
    id: "12",
    name: "The official website of Information and Computing Center of the Ministry of Finance of the Republic of Belarus",
    start: "Aug 2008",
    end: "Dec 2011",
    description: `Today this website looks different. But you can see the previous version on web.archive.org, which I've created:
        <br />http://web.archive.org/web/20110126021810/http://www.ivcmf.by/`,
    url: "https://www.ivcmf.by/",
  },
  {
    id: "13",
    name: "A service where people who need construction services meet - remmo.by",
    start: "May 2011",
    end: "Oct 2011",
    description: `The stack of technologies: CSS, HTML, Photoshop
        <br />I was responsible for creating new HTML layouts using *.PSD sources.
        <br />Original project remmo.by was removed at this time
        <br />
        <br />But You can see a saved version on web.archive.org
        <br />
        <br />Original design by Rusetsky Ruslan aka rdesigner is here: http://archive.rdesigner.ru/component/option,com_jportfolio/Itemid,30/cat,140/`,
    url: "http://web.archive.org/web/20120522171703/http://remmo.by/",
  },
  {
    id: "14",
    name: "Aval Invest Realty",
    start: "Feb 2010",
    end: "Jan 2011",
    description: `This is one of my first projects. It was an April of 2010... It was an IE6's time... It was full of energy and it was necessary to take into account his wishes like as PNG, max-width and more and more... Nowadays this company and its websites are no longer alive. I deployed a backup (the latest version that I had) to show the work that I did. This is ONLY DEMO, NOT REAL SERVICE. You can see source form HTML markup on my github pages`,
    url: "https://valerykatskel.github.io/valprojects.aval/",
  },
  {
    id: "15",
    name: "Clinic of Dr. Naminov",
    start: "Sep 2010",
    end: "Sep 2010",
    description: `This HTML markup was done in September of 2010. It was only one page, the home page.`,
    url: "https://valerykatskel.github.io/valprojects.naminov/",
  },
];
