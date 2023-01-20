window.onload = (event) => {

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (window.matchMedia("(display-mode: standalone)").matches)) {
    screen.orientation.lock("portrait");
 }
 else {
  const background = document.querySelector('.background');

  let x = 0;
  let y = 0;
  let previousX = 0;
  let previousY = 0;

  document.addEventListener('mousemove', (event) => {
    if (previousX && previousY) {
      x += (event.clientX - previousX) * 0.05;
      y += (event.clientY - previousY) * 0.05;
    }
  
    previousX = event.clientX;
    previousY = event.clientY;
  
    requestAnimationFrame(() => {
      background.style.backgroundPosition = `${x}px ${y}px`;
    });
  });
 }

  

  const projectElements = document.querySelectorAll(".project");

  projectElements.forEach(project => {
    project.addEventListener("click", () => {
      const projectDetails = project.querySelector(".project-details");
      projectDetails.classList.toggle("open");
      if (projectDetails.classList.contains("open")) {
          projectDetails.style.maxHeight = '10000px';
      } else {
          projectDetails.style.maxHeight = 0;
      }
      const unexpandedView = project.querySelector(".unexpanded-view i");
      unexpandedView.classList.toggle("rotated");
    });

    const githubLink = project.querySelector(".project-details-skills-container .github-link");

    githubLink.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  
  });


  var text = ["Web Developer", "Computer Science Student", "Mobile Developer", "Overall cool guy"];
  var counter = 1;
  var elem = document.getElementById("dynamic-text");
  elem.innerHTML = text[0]
  var inst = setInterval(change, 3000);

  function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }

};

function displayAbout() {
  document.getElementById('about').classList.remove('hidden');
  document.getElementById('skills').classList.add('hidden');
  document.getElementById('projects').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');
}

function displaySkills() {
  document.getElementById('about').classList.add('hidden');
  document.getElementById('skills').classList.remove('hidden');
  document.getElementById('projects').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');
}

function displayProjects() {
  document.getElementById('about').classList.add('hidden');
  document.getElementById('skills').classList.add('hidden');
  document.getElementById('projects').classList.remove('hidden');
  document.getElementById('contact').classList.add('hidden');
}

function displayContact() {
  document.getElementById('about').classList.add('hidden');
  document.getElementById('skills').classList.add('hidden');
  document.getElementById('projects').classList.add('hidden');
  document.getElementById('contact').classList.remove('hidden');
}