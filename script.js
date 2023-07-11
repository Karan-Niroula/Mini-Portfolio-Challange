let challanges = document.querySelectorAll(".challange");
let clockContainer = document.getElementById("clock");

challanges.forEach((chal) => {
  if (chal.innerHTML.includes("Coming")) {
    chal.style.backgroundColor = "red";
  } else if (chal.innerHTML.includes("Done")) {
    chal.style.backgroundColor = "green";
  } else {
    chal.style.backgroundColor = "yellow";
  }
});

let titleYear = document.querySelector(".title h1");
let i = 0;
function getColors() {
  let arrayOfColors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "pink",
  ];
  titleYear.style.color = arrayOfColors[i];
  clockContainer.style.backgroundColor = arrayOfColors[++i];
  i >= arrayOfColors.length ? (i = 0) : i++;
}
getColors();
setInterval(getColors, 1000);

function getDate() {
  let allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  let month = allMonths[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let currentDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  clockContainer.innerHTML = currentDate;
}

getDate();
setInterval(getDate, 1000);

let achievements = document.querySelector(".achievements");

let titlesContainer = document.querySelector(".achievements .firstColumn ul");
let skillsContainer = document.querySelector(".achievements .secondColumn ul");
let qualificationsContainer = document.querySelector(
  ".achievements .thirdColumn ul"
);

let titles = [
  ["🌱", "Educator"],
  ["💻", "Programmer"],
  ["🌐", "Developer"],
  ["🔥", "Motivator"],
  ["📔", "Content Creator"],
];

let skills = [
  "Web Development",
  "Data Analysis",
  "Data Visualization",
  "Programming",
  "Databases",
  "Developing API",
];

let qualifications = [
  ["👨‍🎓", "MSc. Computer Science Ongoing"],
  ["🎓", "BSc. Information and Communication"],
  ["👨‍🎓", "MSc. Food Technology"],
  ["🎓", "BSc.Food Technology"],
];

skills.forEach((skill) => {
  let li = document.createElement("li");
  li.textContent = `✅  ${skill}`;
  li.style.fontSize = "10px";
  li.style.listStyleType = "none";
  skillsContainer.append(li);
});

titles.forEach((title) => {
  let li = document.createElement("li");
  li.textContent = `${title[0]} ${title[1]}`;
  li.style.fontSize = "10px";
  li.style.listStyleType = "none";
  titlesContainer.append(li);
});

qualifications.forEach((qualification) => {
  let li = document.createElement("li");
  li.textContent = `${qualification[0]} ${qualification[1]}`;
  li.style.fontSize = "10px";
  li.style.listStyleType = "none";
  qualificationsContainer.append(li);
});

let keywordsContainer = document.getElementById("allKeywords");

let keywords = [
  "HTML",
  "HTML5",
  "CSS",
  "CSS3",
  "JS",
  "JavaScript",
  "ES6",
  "Promise",
  "async await",
  "Database",
  "React",
  "React Hooks",
  "Context API",
  "React Router",
  "Web Storage",
  "localStorage",
  "sessionStorage",
  "Redux",
  "Node",
  "MongoDB",
  "SQL",
  "API",
  "DOM",
  "data science",
  "MERN",
  "Python",
  "Flask",
  "Statistics",
  "Linear Algebra",
  "Numpy",
  "Pandas",
  "Scipy",
  "Scikit-learn",
  "Visualization",
  "D3.js",
];

let arrayOfColors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
  "pink",
];
keywords.forEach((keyword) => {
  let p = document.createElement("p");
  p.textContent = `# ${keyword}`;
  p.style.fontWeight = "600";
  p.style.color = "rgba(255, 255, 255, 0.9)";
  p.style.width = "fit-content";
  p.style.padding = "4px";
  p.style.fontSize = "8px";
  p.style.backgroundColor = arrayOfColors[i % arrayOfColors.length];
  i++;
  keywordsContainer.appendChild(p);
});

let challenges = [
  {
    name: "30 Days Of Python",
    topics: [
      "Python",
      "Flask",
      "Numpy",
      "Pandas",
      "Statistics",
      "API",
      "MongoDB",
    ],
    days: 30,
    status: "Done",
    questions: "Above 500",
    projects: "Two",
    interviewQns: "",
    githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
  },
  {
    name: "30 Days Of JavaScript",
    topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
    days: 30,
    status: "Ongoing",
    questions: "Above 500",
    projects: "About 30",
    interviewQns: "",
    githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
  },
  {
    name: "30 Days Of HTML & CSS",
    topics: ["CSS", "Flex", "Grid", "CSS Animation"],
    days: 30,
    status: "Coming",
    questions: "Above 500",
    projects: "Two",
    interviewQns: "",
    githubUrl: "",
  },
  {
    name: "30 Days Of React",
    topics: [
      "React",
      "React Router",
      "Redux",
      "Context API",
      "React Hooks",
      "MERN",
    ],
    days: 30,
    status: "Coming",
    questions: "",
    projects: "",
    interviewQns: "",
    githubUrl: "",
  },
  {
    name: "30 Days Of ReactNative",
    topics: ["ReactNative", "Redux"],
    days: 30,
    status: "Coming",
    questions: "",
    projects: "Two",
    interviewQns: "",
    githubUrl: "",
  },
  {
    name: "30 Days Of Fullstack",
    topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
    days: 30,
    status: "Coming",
    questions: "",
    projects: "",
    interviewQns: "",
    githubUrl: "",
  },
  {
    name: "30 Days Of Data Analysis",
    topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
    days: 30,
    status: "Coming",
    questions: "",
    projects: "",
    interviewQns: "",
    githubUrl: "",
  },
  {
    name: "30 Days Of Machine Learning",
    topics: [
      "Python",
      "Numpy",
      "Pandas",
      "Scikit-learn",
      "Scipy",
      "Linear Algebra",
      "Statistics",
      "Visualization",
    ],
  },
];

/* let challangeContainer = document.querySelectorAll(
  ".allChallanges .challange ul"
); // challangeContainer is a node list

challanges.forEach((challange) => {
  challange.topics.forEach((topic) => {
    challangeContainer.forEach((eachContainer) => {
      let li = document.createElement("li");
      li.innerHTML = topic;
      eachContainer.appendChild(li);
    });
  });
});
 */

let challangeContainer = document.querySelectorAll(
  ".allChallanges .challange ul"
);

challangeContainer.forEach((currentContainer, index) => {
  let challenge = challenges[index];
  challenge.topics.forEach((topic) => {
    let li = document.createElement("li");
    li.innerHTML = topic;
    li.style.listStyleType = "none";
    currentContainer.appendChild(li);
  });
});
