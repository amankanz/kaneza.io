/*
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("nameAudio");
  const button = document.getElementById("playButton");

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      button.textContent = "⏸"; // Change icon to pause
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset to start
      button.textContent = "🔊"; // Change back to play icon
    }
  });
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("nameAudio");
  const button = document.getElementById("playButton");

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      button.textContent = "⏸"; // Change icon to pause
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset to start
      button.textContent = "▶"; // Change back to play icon
    }
  });

  // Reset button when audio ends
  audio.addEventListener("ended", () => {
    button.textContent = "▶"; // Reset to play icon
  });
});
