const video = document.querySelector("video");
const videoSrc = "/videos/output.m3u8";

if (Hls.isSupported()) {
  const hls = new Hls();

  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    video.muted = true;
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
}
