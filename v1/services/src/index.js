(()=>{
  const heroHeight = document.getElementById("hero-section").clientHeight;
  const services = document.getElementById("services");
  services.style.marginTop = `${heroHeight}px`;
})();
function handleScrollNavbar() {
  const title = header.getElementsByTagName("h1")[0];
  let scrollTop = window.scrollY;
  if (scrollTop >= 50) {
    // Show the title and change header styles for scrolled state
    title.classList.add("text-gradient-primary");
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
    header.classList.add("shadow-md");
  } else {
    // Hide the title and change header styles for non-scrolled state
    title.classList.remove("text-gradient-primary");
    header.style.backgroundColor = "transparent";
    header.style.color = "#fff";
    header.classList.remove("shadow-md");
  }
}
function handleScrollHero(){
  const heroSection = document.getElementById("hero-section");
  let scrollTop = window.scrollY;
  heroSection.style.transform = `translateY(-${scrollTop/2}px)`;
  const headlineContainer = heroSection.getElementsByClassName("headline-container")[0];
  if(scrollTop<=200) headlineContainer.style.transform = `scale(${1 - scrollTop/1000})`;
  
  //heroSection.getElementsByClassName("headline-container")[0].style.transform = `scale(${1 - scrollTop*0.200}px)`;
  //scale(${1 - scrollTop/1000})`;
}
window.addEventListener("scroll", handleScrollNavbar);
window.addEventListener( "scroll", handleScrollHero);