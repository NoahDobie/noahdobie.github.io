//NAV BAR
//CHANGE PAGE AND START ON ABOUT PAGE ON LOAD
const pageNames = ["about", "skills", "projects", "contact"];
const pages = {};

const pageClass = document.querySelector(".page");

const scrollPositions = {};

pageNames.forEach(page => {

	pages[page] = document.getElementById(page);

});

window.onload = function() {

	showPage("about");

};

function showPage(pageName) {

	pageNames.forEach(page => {

		if (page === pageName) {

			if (pages[page]) {

				// Display corresponding page
				pages[page].style.display = "grid";

				// Scroll to top
				window.scrollTo(0, 0);

			}

      // Cause progress bars to expand on first load
      if (pageName === "skills") {

        growProgressbar();

      }

		} else {

			// Hide other pages
			pages[page].style.display = "none";

		}

	});

}

//SKILLS PAGE
//PROGRESS BAR EXPANSION ON LOAD
function growProgressbar() {

  const progressbars = document.querySelectorAll(".progressbar .skill");

  progressbars.forEach(function(skill) {

    let value = skill.getAttribute("value");
  
    setTimeout(function() {
  
      skill.style.width = value + "%";
  
    }, 100);
  
  });

}


//ABOUT PAGE
//DYNAMIC TEXT ABOUT NAME TO CHANGE EVERY 3 SECONDS
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

//PROJECT PAGE
//RANDOM COLOUR CHANGE OF EACH CARD
//CLICK LISTENER TO ANIMATE AND EXPAND DROPDOWN/UP IN SEPARATE FILE (PROJECTS.JS)
const projectCards = document.querySelectorAll(".project-card");
const primaryColors = [
	"129, 0, 24", // red
	"0, 0, 255", // blue
	"0, 128, 0", // green
	"128, 0, 128", // purple
	"0, 255, 255", // cyan
	"255, 0, 255", // magenta
];

// Temp array to use to repeat if more than primaryColors elements in projectCards
const usedColors = [];

projectCards.forEach((project) => {

	if (primaryColors.length === 0) {

		// If all colors have been used, swap the arrays
		primaryColors.push(...usedColors);
		usedColors.length = 0;

	}

	const randomIndex = Math.floor(Math.random() * primaryColors.length);
	const randomColor = primaryColors[randomIndex];

	// Add used colour to used array
	usedColors.push(randomColor);
	// Remove the selected color from the array
	primaryColors.splice(randomIndex, 1);

	project.style.backgroundColor = `rgba(${randomColor}, 0.5)`;

	const innerelements = project.querySelectorAll("#skills h5");

	innerelements.forEach((text) => {

		text.style.backgroundColor = `rgba(${randomColor}, 0.5)`;

	});

});

//NOT IN USE AT THE MOMENT
//VERY LAGGY ON SLOWER DEVICES

//ABOUT PAGE
//WHAT I DO BOXES MOVE BACK AND FORTH
//DESKTOP/LANDSCAPE ONLY
// function runOnLandscape() {

//   const orientation = window.matchMedia("(orientation: landscape)").matches;

//   if (orientation) {

//     const boxes = document.querySelectorAll(".whatido-box");
//     const container = boxes[0].parentElement;
//     const containerWidth = container.offsetWidth;

//     const wrapper = document.getElementById("whatido-box-wrapper");

//     let boxIntervals = [];

//     function moveBox(box) {

//       let boxWidth = box.offsetWidth;
//       let margin = Math.random() * (containerWidth - boxWidth);
//       let direction = 1;

//       let interval = setInterval(function() {

//         margin += direction;

//         if (margin + boxWidth > containerWidth) {

//           margin = containerWidth - boxWidth;
//           direction = -1;

//         }

//         if (margin < 0) {

//           margin = 0;
//           direction = 1;

//         }

//         box.style.marginLeft = margin + "px";

//       }, 18);

//       boxIntervals.push(interval);

//     }

//     boxes.forEach(function(box) {

//       moveBox(box);

//     });

//     wrapper.addEventListener("mouseenter", function() {

//       boxIntervals.forEach(function(interval) {

//         clearInterval(interval);

//       });

//       boxes.forEach(function(box) {

//         box.style.marginLeft = "0px";

//       });

//     });

//     wrapper.addEventListener("mouseleave", function() {

//       boxes.forEach(function(box) {

//         moveBox(box);

//       });

//     });

//   }

// }

// // Add event listener for resize event on window object
// window.addEventListener("resize", function() {
//   runOnLandscape();
// });