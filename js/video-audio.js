const video = document.querySelector(".gallery-vid");

const MyVideo = (function () {
  ///////////////
  // TO UNMUTE VIDEO
  video.addEventListener("mouseover", () => {
    video.muted = false;
  });

  ///////////
  // TO MUTE BACK VIDEO
  video.addEventListener("mouseout", () => {
    video.muted = true;
  });
})();

export default MyVideo;
