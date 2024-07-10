const tiltEls = document.querySelectorAll('.eduu');
const tiltmove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`
tiltEls.forEach(tilt => {
    const height = tilt.clientHeight
    const width = tilt.clientWidth
    
    tilt.addEventListener('mousemove', (e) => {
        const x = e.layerX
        const y = e.layerY
        const multiplier = 50
        const xRotate = multiplier * ((x - width / 2) / width)
        const yRotate = -multiplier * ((y - height / 2) / height)
        
        tilt.style.transform=tiltmove(xRotate,yRotate)
    }
    )

    tilt.addEventListener('mouseout', () => tilt.style.transform=tiltmove(0,0)
    )
})
const tiltls = document.querySelectorAll('.edu');
const tiltMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`
tiltls.forEach(tilt => {
    const height = tilt.clientHeight
    const width = tilt.clientWidth
    
    tilt.addEventListener('mousemove', (e) => {
        const x = e.layerX
        const y = e.layerY
        const multiplier = 50
       const xRotate = multiplier * ((x - width / 2) / width)
        const yRotate = -multiplier * ((y - height / 2) / height)
        
        tilt.style.transform=tiltMove(xRotate,yRotate)
    }
    )

    tilt.addEventListener('mouseout', () => tilt.style.transform=tiltMove(0,0)
    )
})
const tiltEs = document.querySelectorAll('.name');
const tiltMOve = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`
tiltEs.forEach(tilt => {
    const height = tilt.clientHeight
    const width = tilt.clientWidth
    
    tilt.addEventListener('mousemove', (e) => {
        const x = e.layerX
        const y = e.layerY
        const multiplier = 50
        const xRotate = multiplier * ((x - width / 2) / width)
        const yRotate = -multiplier * ((y - height / 2) / height)
        
        tilt.style.transform=tiltMOve(xRotate,yRotate)
    }
    )

    tilt.addEventListener('mouseout', () => tilt.style.transform=tiltMOve(0,0)
    )
})

const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100 + '%';
    slidesContainer.style.transform = 'translateX(' + offset + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 2000); // Change slide every 3 seconds
 
      // Function to scroll to the top smoothly
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      }

      // Add an event listener to the "scroll to top" button
      const backToTopButton = document.querySelector(".back-to-top");
      backToTopButton.addEventListener("click", scrollToTop);

      // Add an event listener to show/hide the button based on scroll position
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 100) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      });
    

