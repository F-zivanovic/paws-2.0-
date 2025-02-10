// preloader start
// window.onload = function () {
//   //hide the preloader
//   document.querySelector(".preloader").style.display = "none";
// };
// window.onload = function () {
//   setTimeout(function () {
//     // hide the preloader after 2 seconds
//     document.querySelector(".preloader").style.display = "none";
//   }, 4000);
// };

// preloader end
// Select the navbar element
const navbar = document.querySelector(".main-nav");

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Check if the user has scrolled more than a certain amount (e.g., 50 pixels)
  if (window.scrollY > 250) {
    // Add the 'fixed-top' class to the navbar
    navbar.classList.add("fixed-top");
  } else {
    // Remove the 'fixed-top' class if the user scrolls back up
    navbar.classList.remove("fixed-top");
  }
});

// Function to fetch the version number dynamically
function getVersion() {
  // You can generate version number dynamically based on date, time, or any other method
  // For example, you can use the current timestamp
  return Date.now();
}

// document.addEventListener("DOMContentLoaded", function () {
//   const version = getVersion(); // Get the version once and use it

//   // Update the version number in the CSS URLs
//   document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
//     const href = link.getAttribute("href");
//     link.setAttribute("href", href + `?ver=${version}`);
//     console.log(link);
    
//   });

//   // Update the version number in the JavaScript URLs
//   document.querySelectorAll("script[src]").forEach((script) => {
//     const src = script.getAttribute("src");
//     script.setAttribute("src", src + `?ver=${version}`);
//   });
// });

// cta animated text start
// Define the array of strings
var strings = ["Relax", "Don't worry", "Be assured", "Save money"];
var index = 0;
var textElement = document.getElementById("cycle_text");
var typingSpeed = 200; // Speed of typing in milliseconds
var backSpeed = 50; // Speed of deleting in milliseconds
var backDelay = 2000; // Delay after deleting in milliseconds

if (textElement) {
  function typeString() {
    var currentString = strings[index];
    var currentText = textElement.innerText;
    var length = currentText.length;

    if (length < currentString.length) {
      textElement.innerText += currentString[length];
      setTimeout(typeString, typingSpeed);
    } else {
      setTimeout(deleteString, backDelay);
    }
  }

  function deleteString() {
    var currentString = strings[index];
    var currentText = textElement.innerText;
    var length = currentText.length;

    if (length > 0) {
      textElement.innerText = currentText.slice(0, length - 1);
      setTimeout(deleteString, backSpeed);
    } else {
      index = (index + 1) % strings.length;
      setTimeout(typeString, typingSpeed);
    }
  }

  // Start the typing animation
  typeString();
}

// cta animated text end
// slider
// Check if .slider class exists
// Check if .slider class exists
// Check if .slider class exists
if ($(".slider").length > 0) {
  console.log("slider found xa");
  // Append CSS links dynamically to load Slick CSS
  var slickCSS = document.createElement("link");
  slickCSS.rel = "stylesheet";
  slickCSS.href = "vendor/slick.v1.8.1/slick/slick.min.css";
  document.head.appendChild(slickCSS);

  var slickThemeCSS = document.createElement("link");
  slickThemeCSS.rel = "stylesheet";
  slickThemeCSS.href = "vendor/slick.v1.8.1/slick/slick-theme.min.css";
  document.head.appendChild(slickThemeCSS);
  // Append script tag dynamically to load Slick library
  var script = document.createElement("script");
  script.src = "vendor/slick.v1.8.1/slick/slick.min.js";
  script.onload = function () {
    // Initialize Slick slider
    $(".slider").slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  };

  // Find the script tag that loads your script.js file
  var targetScript = document.querySelector(
    'script[src^="assets/js/script.js"]'
  );

  // Insert the Slick script before the target script
  if (targetScript) {
    targetScript.parentNode.insertBefore(script, targetScript);
  } else {
    // If target script is not found, append the Slick script at the end of the head
    document.head.appendChild(script);
  }
} else {
  console.log("slider not found");
}
if ($(".carousel").length > 0) {
  console.log("slider found");
  // Append script tag dynamically to load Slick library
  var script = document.createElement("script");
  script.src = "vendor/slick.v1.8.1/slick/slick.min.js";
  script.onload = function () {
    // Initialize Slick slider
    $(".carousel").slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // 6 miliseconds
    });
  };

  // Find the script tag that loads your script.js file
  var targetScript = document.querySelector(
    'script[src^="assets/js/script.js"]'
  );

  // Insert the Slick script before the target script
  if (targetScript) {
    targetScript.parentNode.insertBefore(script, targetScript);
  } else {
    // If target script is not found, append the Slick script at the end of the head
    document.head.appendChild(script);
  }
} else {
  console.log("slider not found");
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll(".needs-validation");
if ($(".needs-validation").length > 0) {
  (function () {
    "use strict";
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
}

// chat gpt
// JavaScript
// $(document).ready(function () {
//   $(window).scroll(function () {
//     $(".counter-value").each(function () {
//       var $this = $(this);
//       if (isElementInViewport($this) && !$this.data("animated")) {
//         $this.data("animated", true);
//         var countTo = parseFloat($this.attr("data-count"));
//         var currentCount = parseFloat($this.text());
//         var options = {
//           startVal: currentCount,
//           endVal: countTo,
//           duration: 2,
//         };
//         var countUp = new CountUp($this[0], countTo, options);
//         if (!countUp.error) {
//           countUp.start();
//         } else {
//           console.error(countUp.error);
//         }
//       }
//     });
//   });

//   // Function to check if an element is in the viewport
//   function isElementInViewport(el) {
//     var rect = el[0].getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= $(window).height() &&
//       rect.right <= $(window).width()
//     );
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  // Get all links with class "bookmark-link"
  var bookmarkLinks = document.querySelectorAll(".blink");

  // Check if any links with the class are found
  if (bookmarkLinks.length === 0) {
    console.log("No bookmark links found.");
    return; // Do nothing if no links are found
  }

  // Add click event listener to each link
  bookmarkLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default action
      event.preventDefault();

      // Optionally, you can handle scroll to the section manually
      // For example:
      var targetId = this.getAttribute("href").substring(1); // Get the target section ID
      var targetSection = document.getElementById(targetId); // Find the target section element
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
      }
    });
  });
});
