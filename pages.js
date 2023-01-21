// Function to display the about page
function displayAbout() {
  // Hide all other pages
  document.getElementById("skills-page").classList.add("hidden");
  document.getElementById("projects-page").classList.add("hidden");
  document.getElementById("contact-page").classList.add("hidden");
  // Show the about page
  document.getElementById("about-page").classList.remove("hidden");
}

// Function to display the skills page
function displaySkills() {
  // Hide all other pages
  document.getElementById("about-page").classList.add("hidden");
  document.getElementById("projects-page").classList.add("hidden");
  document.getElementById("contact-page").classList.add("hidden");
  // Show the skills page
  document.getElementById("skills-page").classList.remove("hidden");
}

// Function to display the projects page
function displayProjects() {
  // Hide all other pages
  document.getElementById("about-page").classList.add("hidden");
  document.getElementById("skills-page").classList.add("hidden");
  document.getElementById("contact-page").classList.add("hidden");
  // Show the projects page
  document.getElementById("projects-page").classList.remove("hidden");
}

// Function to display the contact page
function displayContact() {
  // Hide all other pages
  document.getElementById("about-page").classList.add("hidden");
  document.getElementById("skills-page").classList.add("hidden");
  document.getElementById("projects-page").classList.add("hidden");
  // Show the contact page
  document.getElementById("contact-page").classList.remove("hidden");
}