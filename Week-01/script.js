window.addEventListener('scroll', function () {
    const title = document.querySelector('.title');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {  // Trigger the animation after scrolling 100px
        title.style.opacity = 1;

        // Set a timeout to make the title disappear after 5 seconds
        setTimeout(function() {
            title.style.opacity = 0;
        }, 2500); // 5000 milliseconds (5 seconds)
    } else {
        title.style.opacity = 0;
    }
});

// Select the button by its ID
const toggleButton = document.getElementById("toggleButton");

// Event listener for button click
toggleButton.addEventListener("click", function() {
    // Check the current background color of the body
    if (document.body.style.backgroundColor === "black") {
        // If it's black, change it to white
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"; // Change text color to black for readability
    } else {
        // If it's not black, change it to black
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; // Change text color to white for readability
    }
});
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
let index = 0;

// Function to move to the next image
function nextSlide() {
    index = (index + 1) % images.length;  // Loop back to the first image after the last one
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Optional: Add click event for manual navigation
document.querySelector('.carousel-container::before').addEventListener('click', function() {
    index = (index - 1 + images.length) % images.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.carousel-container::after').addEventListener('click', nextSlide);
