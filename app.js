const wrapper = document.querySelector(".wrapper");
const myMusic = document.getElementById("music"); // Reference the audio element

// Set the audio to loop
myMusic.loop = true;
myMusic.volume = 0; // Start with the volume at 0 (mute)

// Function to fade in the audio
function fadeIn(audio, duration) {
  let volume = 0;
  audio.play();
  const interval = setInterval(() => {
    if (volume < 1) {
      volume += 0.05; // Increase volume by 0.05 for smooth fade-in
      audio.volume = volume;
    } else {
      clearInterval(interval); // Stop once the volume reaches 1
    }
  }, duration / 20); // Adjust fade duration here
}

// Function to fade out the audio
function fadeOut(audio, duration) {
  let volume = audio.volume;
  const interval = setInterval(() => {
    if (volume > 0) {
      volume -= 0.05; // Decrease volume by 0.05 for smooth fade-out
      audio.volume = volume;
    } else {
      clearInterval(interval); // Stop once the volume reaches 0
      audio.pause(); // Pause the audio after fade-out
    }
  }, duration / 20); // Adjust fade duration here
}

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open"); // Toggle the "open" class

  // Add a delay before playing music (e.g., 2 seconds delay)
  const delay = 1300; // Delay in milliseconds (2000ms = 2 seconds)

  // Play or pause the music with fade in/out
  if (myMusic.paused) {
    setTimeout(() => {
      fadeIn(myMusic, 2000); // Fade in over 2 seconds
    }, delay); // Add delay before starting the fade-in
  } else {
    fadeOut(myMusic, 2000); // Fade out over 2 seconds
  }
});
