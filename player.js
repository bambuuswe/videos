const videoName = window.location.pathname.split("/").pop().replace(".html", "");
const videoPath = `${videoName}.mp4`;

document.getElementById("videoPlayer").src = videoPath;
