const select = (elem) => document.querySelector(elem);
const selectAll = (elem) => document.querySelectorAll(elem);
const header = select("#header");
const home = select("#home");
const navBar = select("#header #nav-bar");
const elements = selectAll(".headline-container .slide-up-animation");
const menuIcon = select("#header .menu-icon");
const sidenav = select("#side-nav");
const featureCardContainer = select(".feature-card-container");
const serviceCardContainer = select("#service-card-container");   
let scrollTop = 0;
menuIcon.onclick = () => {
  sidenav.style.transform = "translateX(0%)";
};
document.addEventListener("click", (e) => {
  if (e.target !== sidenav && e.target !== menuIcon) {
    sidenav.style.transform = "translateX(-100%)";
  }
});

for (let elem of elements) {
  elem.style.opacity = "0";
}
function slideUpAnimation() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.animation = `slideUp ${0.3 * (i + 0.6)}s ease-out 1`;
    elements[i].style.opacity = "1";
  }
}
function handleScroll() {
  const title = header.getElementsByTagName("h1")[0];
  scrollTop = window.scrollY;
console.log(scrollTop);
  if (scrollTop >= 100) {
    // Show the title and change header styles for scrolled state
    title.style.display = "block";
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
  } else {
    // Hide the title and change header styles for non-scrolled state
    title.style.display = "none";
    header.style.backgroundColor = "transparent";
    header.style.color = "#fff";
  }
}
function getServises() {
  fetch("./assests/services.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderServices(data);
    });
}

function renderServices({ services }) {
  services.forEach((service, index) => {
    const createCard = document.createElement("div");

    if (index % 2 == 0) {
      createCard.classList.add("service-card", "flex", "flex-row");
    } else {
      createCard.classList.add("service-card", "flex", "flex-row-reverse");
    }
    const image = document.createElement("div");
    image.classList.add("image");
    image.style.backgroundImage = `url(${service.image})`;
    const description = document.createElement("div");
    description.classList.add(
      "description",
      "p-6",
      "flex",
      "flex-col",
      "justify-center"
    );
    const title = document.createElement("h4");
    title.classList.add("text-2xl", "text-green-400", "font-bold");
    title.textContent = service.title;
    const text = document.createElement("p");
    text.classList.add("text-gray-600");
    text.textContent = service.description;
    description.appendChild(title);
    description.appendChild(text);
    createCard.appendChild(image);
    createCard.appendChild(description);
    serviceCardContainer.appendChild(createCard);
  });
  window.addEventListener(
    "scroll",
    addAnimationClassToServicse
  )
}
function addAnimationClassToServicse(){
  const heroHeight = home.offsetHeight;
  const serviceCards = serviceCardContainer.querySelectorAll(".service-card");
  if (scrollTop >= heroHeight-200) {
    serviceCards.forEach((card, index) => {
      if (index % 2) {
        // card.querySelector(".image").classList.add(`${scrollTop>=heroHeight-(200*(index+1))?"slideRight":"shiftLeft"}`);
        card.querySelector(".image").classList.add("slideRight");
        card.querySelector(".image").classList.remove("shiftLeft");
      } else {
        card.querySelector(".image").classList.add("slideLeft");
        card.querySelector(".image").classList.remove("shiftRight");
      }
    });
  } else{
    serviceCards.forEach((card, index) => {
      if (index % 2) {
        card.querySelector(".image").classList.remove("slideRight");
        card.querySelector(".image").classList.add("shiftLeft");
      } else {
        card.querySelector(".image").classList.remove("slideLeft");
        card.querySelector(".image").classList.add("shiftRight");
      }
    });
  }
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", slideUpAnimation);
window.addEventListener("load", getServises);
 