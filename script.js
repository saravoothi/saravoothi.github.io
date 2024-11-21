:root {
    --main-bg-color: #ffffff;
    --main-text-color: #333;
    --secondary-text-color: #555;
    --timer-color: white;
    --timer-bg-color: #333;
    --font-family: 'Arial', sans-serif;
}

/* General Styles */
body {
    font-family: var(--font-family);
    margin: 0;
    padding: 10px;
    background-color: var(--main-bg-color);
    text-align: center;
    color: var(--main-text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Container Styles */
.container, .section2, .section3, .section4, .section5 {
    max-width: 1200px;
    margin: 1% auto;
    padding: 1rem;
    background-image: url('bg/BG2.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-radius: 10px;
}

h1, h2 {
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    color: var(--main-text-color);
    margin-bottom: 0.5rem;
}

p {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    margin: 0.5rem 0;
    color: var(--secondary-text-color);
}

/* Countdown Timer Styles */
.timer-box {
    display: flex;
    justify-content: center;
    gap: clamp(1rem, 2vw, 1.5rem);
    margin-bottom: 2rem;
}

#days, #hours, #minutes, #seconds {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.25rem;
    color: var(--timer-color);
    border-radius: 8px;
    width: 4rem;
    height: 4rem;
    text-align: center;
}

#days {
    background-image: url('bg/timed.jpeg');
}

#hours {
    background-image: url('bg/timeh.jpeg');
}

#minutes {
    background-image: url('bg/timem.jpeg');
}

#seconds {
    background-image: url('bg/times.jpeg');
}

/* Image Container */
.image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    aspect-ratio: 16 / 9;
}

/* Footer Styles */
.footer {
    margin-top: 2rem;
    font-size: clamp(0.75rem, 1vw, 1rem);
    color: #777;
}

/* Flip Container Styles */
.flip-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* ใช้เต็มความกว้าง */
    max-width: 100%; /* เพิ่มขนาดสูงสุดเพื่อให้สอดคล้องกับการแสดงผล */
    height: auto;
    position: relative;
    margin: auto; /* จัดให้อยู่กึ่งกลางในแนวนอน */
    perspective: auto; /* ให้มีมุมมอง 3 มิติ */
    z-index: 2;
    aspect-ratio: 9 / 12; /* กำหนดอัตราส่วน 16:9 */
}

.flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.flipper .front, .flipper .back {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
}

.flipper .front {
    z-index: 2;
    transform: rotateY(0deg);
}

.flipper .back {
    transform: rotateY(180deg);
}

.flip-container.flipped .flipper {
    transform: rotateY(180deg);
}

.rounded-image {
    border-radius: 10px;
    width: 100%; /* ให้เต็มพื้นที่ขององค์ประกอบพาเรนต์ */
    height: auto; /* ปรับความสูงตามสัดส่วน */
    aspect-ratio: 9 / 12; /* กำหนดอัตราส่วน 16:9 */
    object-fit: cover;
}



/* Video Player Styles */
.player-container {
    width: 80%;
    max-width: 400px;
    min-height: 300px;
    background-color: rgba(255, 255, 255, 0.096);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    margin: auto;
}

video {
    width: 100%;
    border-radius: 10px;
    outline: none;
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.progress-bar {
    flex-grow: 1;
    margin: 0 10px;
    background: linear-gradient(90deg, #ff758c, #ff7eb3);
    height: clamp(4px, 1vw, 6px);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    transition: width 0.3s ease-in-out;
}

.progress-bar div {
    height: 100%;
    background: linear-gradient(45deg, #89CFF0, #5DADE2, #2980B9);
    border-radius: 3px;
    width: 0;
}

.volume-slider {
    appearance: none;
    width: 100px;
    height: 6px;
    background: linear-gradient(90deg, #ff85b3, #f054a7);
    outline: none;
    border-radius: 3px;
    cursor: pointer;
}

.play-button {
    background-color: #ffffff00;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s ease;
}

.play-button:hover {
    background: linear-gradient(90deg, #ff85b3, #f054a7);
    transform: scale(1.05);
}

/* Slideshow Styles */
.slideshow-container {
    position: relative;
    max-width: 2024px;
    width: auto;
    overflow: hidden;
    margin: auto;
}

.slides {
    display: none;
    width: 100%;
    transition: opacity 0.3s ease-in-out;
}

img {
    width: 100%;
    height: auto;   
    object-fit: cover;
    aspect-ratio: 18 / 9;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    user-select: none;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
.gradient-button {
    background: linear-gradient(90deg, #ff758c, #ff7eb3);
    color: white;
    padding: 15px 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .gradient-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

/* ปรับมุมimage12*/
  .rounded-corners {
    width: auto;
    height: auto;
    border-radius: 15px; /* ปรับค่าตามต้องการ */
    overflow: hidden; /* เพื่อซ่อนส่วนที่เกินออกมา */
}
  
/* Map Section */
#map iframe {
    border-radius: 15px;
    width: 100%;
    height: 400px;
}

/* Social Share Section */
.social-share {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(10px, 2vw, 15px);
    margin: 20px 0;
    flex-wrap: wrap;
}

.social-share img {
    width: 50px;
    height: 50px;
    transition: transform 0.2s;
}

.social-share img:hover {
    transform: scale(1.1);
}
