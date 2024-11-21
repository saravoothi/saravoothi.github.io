// Countdown Timer Section
let countdownInterval;

function startCountdown() {
    const weddingDate = new Date("January 12, 2025 07:09:00").getTime();
    
    function countdown() {
        const now = new Date().getTime();
        const timeRemaining = weddingDate - now;

        // Calculate time left
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display time left
        document.getElementById('days').textContent = days + 'D';
        document.getElementById('hours').textContent = hours + 'H';
        document.getElementById('minutes').textContent = minutes + 'M';
        document.getElementById('seconds').textContent = seconds + 'S';

        // If the countdown is finished
        if (timeRemaining < 0) {
            document.getElementById("countdown").innerHTML = "The event has started!";
            document.getElementById('days').textContent = '0D';
            document.getElementById('hours').textContent = '0H';
            document.getElementById('minutes').textContent = '0M';
            document.getElementById('seconds').textContent = '0S';
        } else {
            window.requestAnimationFrame(countdown);
        }
    }

    countdownInterval = window.requestAnimationFrame(countdown);
}

startCountdown(); // Start the countdown

// Video Player Section
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const volumeSlider = document.getElementById('volumeSlider');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '❚❚';
  } else {
    video.pause();
    playPauseBtn.textContent = '►';
  }
});

video.addEventListener('timeupdate', () => {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

progressBar.addEventListener('click', (e) => {
  const clickX = e.offsetX;
  const width = progressBar.offsetWidth;
  const duration = video.duration;
  video.currentTime = (clickX / width) * duration;
});

volumeSlider.addEventListener('input', (e) => {
  video.volume = e.target.value;
});

// Lazy load video using IntersectionObserver
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.setAttribute('src', video.getAttribute('data-src'));
                observer.unobserve(video); // Stop observing once video is loaded
            }
        });
    });

    observer.observe(video);
});

// Slideshow Section
let slideIndex = 0;
const slides = document.getElementsByClassName("slides");
const dotsContainer = document.getElementById("dots-container");
let autoSlideTimeout;

// Add dots dynamically
for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener('click', function() { currentSlide(i); resetAutoSlide(); });
    dotsContainer.appendChild(dot);
}

let dots = document.getElementsByClassName("dot");

// Initial slide display
showSlides(slideIndex);
autoSlide(); // Start auto sliding when page loads

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides(slideIndex);
    resetAutoSlide(); // Reset the timer when manually changing slides
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    resetAutoSlide(); // Reset the timer when clicking on a dot
}

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[n].style.display = "block";
    dots[n].classList.add("active");
}

// Auto slide function that triggers every 5 seconds
function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
        plusSlides(1); // Move to the next slide
        autoSlide();   // Continue sliding automatically
    }, 5000);  // 5000 ms = 5 seconds
}

// Reset auto slide timer when user interacts
function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);  // Clear the existing timer
    autoSlide();  // Restart the timer
}

// Swipe controls for slideshow
let startX;
const slideshowElement = document.getElementById('slideshow');

slideshowElement.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    resetAutoSlide(); // Reset auto slide when user interacts
});

slideshowElement.addEventListener('touchend', function(event) {
    let endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
        plusSlides(1);  // Swipe left
    } else if (endX - startX > 50) {
        plusSlides(-1); // Swipe right
    }
    resetAutoSlide(); // Reset auto slide after swiping
});

// Flip Effect Section
let isFlipped = false;
const flipContainer = document.getElementById('flip-container');
let flipInterval = 3000; // Start at 3000ms
const maxFlipInterval = 20000; // Maximum interval is 20 seconds

function flip() {
    const flipper = flipContainer.querySelector('.flipper');
    if (isFlipped) {
        flipper.style.transform = 'rotateY(0deg)';
    } else {
        flipper.style.transform = 'rotateY(180deg)';
    }
    isFlipped = !isFlipped;
}

function startFlip() {
    if (flipInterval < maxFlipInterval) {
        setTimeout(() => {
            flip(); // Perform the flip
            flipInterval += 3000; // Increase the interval by 3000ms each time
            startFlip(); // Continue the loop
        }, flipInterval);
    }
}

// Start flip on click
flipContainer.addEventListener('click', flip);

// Start the first flip
startFlip();
