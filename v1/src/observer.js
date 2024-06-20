
function addAnimation(observedElement, animationClass = "shiftLeft") {
    console.log(observedElement);
    // Configure Intersection Observer
    const options = {
      threshold: 0.2, // Adjust threshold as needed
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(animationClass);
          
        }
        else{
            entry.target.classList.add(animationClass);

        }

          
      });
    }, options);
  
      const elementsToAnimate = document.querySelectorAll(observedElement);
      elementsToAnimate.forEach((element) => {
        console.log(element);
        observer.observe(element);
        element.classList.add(animationClass);
        element.style.transition = "0.9s ease";
      });
    
  }
  export default addAnimation;