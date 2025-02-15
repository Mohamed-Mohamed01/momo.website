/* script.js
   - Typewriter effect with color changes
   - Sticky header on scroll
   - Simple active link update (optional)
*/

document.addEventListener("DOMContentLoaded", function () {
    const typedTextSpan = document.querySelector(".typewriter");
    // Now each object in the array has a text & color
    const textArray = [
      { text: "Developer", color: "#00d4ff" },
      { text: "Student", color: "#a200ff" },
      { text: "Aviator", color: "#ffd700" },
    ];
    const typingDelay = 100;
    const erasingDelay = 60;
    const newTextDelay = 1000;
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].text.length) {
        typedTextSpan.textContent +=
          textArray[textArrayIndex].text.charAt(charIndex);
        typedTextSpan.style.color = textArray[textArrayIndex].color;
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].text.substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
      }
    }
  
    setTimeout(type, 500);
  
    // Sticky navbar
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  
    // Optional: highlight active nav link when scrolling
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav a");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });

    // Toggle mobile menu on click
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    });

  });
  