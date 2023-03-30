//PROJECT PAGE
//CLICK LISTENER TO ANIMATE AND EXPAND DROPDOWN/UP IN SEPARATE FILE

var portOrLand = window.innerWidth >= window.innerHeight;
var screenOrientation = portOrLand ? 'landscape' : 'portrait';

// Function to check window orientation and update project cards
function checkOrientation() {

  portOrLand = window.innerWidth >= window.innerHeight;
  screenOrientation = portOrLand ? 'landscape' : 'portrait';

  // Different orientations have slightly different size values
  if (screenOrientation === 'landscape') {

    landscapeSetup();

  } else if (screenOrientation === 'portrait') {

    portraitSetup();

  }

}

// Set up of project cards for landscape orientation
function landscapeSetup() {

  projectCards.forEach((project) => {

    // Keep expansion if expanded, if not set default values
    if (project.getAttribute('data-clicked') === 'T') {

      project.style.maxHeight = '40rem';
      project.querySelector('h1').style.fontSize = window.innerWidth <= 1000 ? '125%' : '175%';
  
      project.querySelector('#description').style.visibility = 'visible';
      project.querySelector('i').style.transform = 'rotate(0deg)';

    } else {

      project.style.maxHeight = window.innerWidth <= 1000 ? '10rem' : '16rem';
      project.querySelector('h1').style.fontSize = window.innerWidth <= 1000 ? '200%' : '300%';
  
      project.querySelector('#description').style.visibility = 'hidden';
      project.querySelector('i').style.transform = 'rotate(180deg)';

    }

  });

}

// Set up of project cards for portrait orientation
function portraitSetup() {

  projectCards.forEach((project) => {

    // Keep expansion if expanded, if not set default values
    if (project.getAttribute('data-clicked') === 'T') {

      project.style.maxHeight = '60rem';
      project.querySelector('h1').style.fontSize = '125%';
  
      project.querySelector('#description').style.visibility = 'visible';
      project.querySelector('i').style.transform = 'rotate(0deg)';

    } else {

      project.style.maxHeight = '10rem';
      project.querySelector('h1').style.fontSize = '200%';
  
      project.querySelector('#description').style.visibility = 'hidden';
      project.querySelector('i').style.transform = 'rotate(180deg)';

    }

  });

}

// Setup click eventListener for portrait and landscape on project cards
projectCards.forEach((project) => {

  project.addEventListener('click', () => {

    if (project.getAttribute('data-clicked') === 'F') {

      project.scrollIntoView({ behavior: 'smooth' });

    }
    project.scrollIntoView({ behavior: 'smooth' });

    const clicked = project.getAttribute('data-clicked') === 'T';
    project.setAttribute('data-clicked', clicked ? 'F' : 'T');

    project.style.transition = 'max-height 0.5s ease';

    const descVisible = clicked ? 'hidden' : 'visible';

    if (screenOrientation === 'landscape') {

      if (window.innerWidth <= 1000) {

        project.style.maxHeight = clicked ? '10rem' : `40rem`;

        const titleSize = clicked ? '200%' : '125%';
  
        project.querySelector('h1').style.fontSize = titleSize;

      } else {

        project.style.maxHeight = clicked ? '16rem' : `40rem`;

        const titleSize = clicked ? '300%' : '175%';
  
        project.querySelector('h1').style.fontSize = titleSize;

      }

    } else if (screenOrientation === 'portrait') {

      project.style.maxHeight = clicked ? '10rem' : `60rem`;

      const titleSize = clicked ? '200%' : '125%';

      project.querySelector('h1').style.fontSize = titleSize;

    }

    project.querySelector('#description').style.visibility = descVisible;
    const chevron = clicked ? 'rotate(180deg)' : 'rotate(0deg)';
    project.querySelector('i').style.transform = chevron;

  });

});

// Call checkOrientation once to set up the page with the correct orientation
checkOrientation();

// Check the orientation when the window is resized
window.addEventListener('resize', checkOrientation);