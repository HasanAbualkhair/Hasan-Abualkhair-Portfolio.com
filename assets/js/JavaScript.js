/* Make it scroll to the top */

const goUp = document.querySelector(".go-up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    goUp.style.opacity = "1";
  } else {
    goUp.style.opacity = "0";
  }
});

goUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/* End of make it scroll to the top */


/* Start of Nav burger menu selections */

const burger = document.querySelector(".burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () =>  {
  ul.classList.toggle("display");
});

// Close burger menu when a link is clicked

// Select nav links

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("display");
  })
);