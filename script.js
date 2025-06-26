const courses = [
  {
    id: "course1",
    title: "JavaScript Essentials",
    description: "Master JavaScript fundamentals and syntax.",
    video:  "https://www.youtube.com/embed/W6NZfCO5SIk",
  },
    
  
  {
    id: "course2",
    title: "React for Beginners",
    description: "Learn the basics of React.js in this beginner course.",
    video: "https://www.youtube.com/embed/dGcsHMXbSOA",
  },  
];

const progressData = {
  course1: 70,
  course2: 45,
};

function loadPage(page) {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  if (page === "home") {
    const title = document.createElement("h2");
    title.textContent = "Welcome to E-LearnPro";
    title.style.textAlign = "center";
    title.style.fontSize = "28px";

    const desc = document.createElement("p");
    desc.textContent = "Explore courses, track your progress, and learn at your own pace.";
    desc.style.textAlign = "center";

    main.appendChild(title);
    main.appendChild(desc);
  }

  if (page === "courses") {
    const title = document.createElement("h2");
    title.textContent = "Available Courses";
    title.style.fontSize = "24px";
    main.appendChild(title);

    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "card";

      const h3 = document.createElement("h3");
      h3.textContent = course.title;

      const p = document.createElement("p");
      p.textContent = course.description;

      const iframe = document.createElement("iframe");
      iframe.src = course.video;
      iframe.width = "100%";
      iframe.height = "250";
      iframe.allowFullscreen = true;
      iframe.style.border = "none";

      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(iframe);

      main.appendChild(card);
    });
  }

  if (page === "progress") {
    const title = document.createElement("h2");
    title.textContent = "Your Progress";
    title.style.fontSize = "24px";
    main.appendChild(title);

    for (let courseId in progressData) {
      const course = courses.find(c => c.id === courseId);
      const percent = progressData[courseId];

      const card = document.createElement("div");
      card.className = "card";

      const h3 = document.createElement("h3");
      h3.textContent = course.title;

      const barContainer = document.createElement("div");
      barContainer.className = "progress-bar-container";

      const bar = document.createElement("div");
      bar.className = "progress-bar";
      bar.style.width = percent + "%";

      barContainer.appendChild(bar);

      const label = document.createElement("p");
      label.textContent = $percent% completed;
      label.style.fontSize = "14px";
      label.style.color = "#555";

      card.appendChild(h3);
      card.appendChild(barContainer);
      card.appendChild(label);

      main.appendChild(card);
    }
  }
}

// Load home by default
window.onload = () => loadPage("home");