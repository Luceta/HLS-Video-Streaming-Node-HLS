const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
console.log(ffmpeg, "check");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

ffmpeg("videos/video.mp4", { timeout: 432000 })
  .addOptions([
    "-profile:v baseline", // baseline profile (level 3.0) for H264 video codec
    "-level 3.0",
    "-start_number 0", // start the first .ts segment at index 0
    "-hls_time 10", // 10 second segment duration
    "-hls_list_size 0", // Maxmimum number of playlist entries (0 means all entries/infinite)
    "-f hls", // HLS format
  ])
  .output("videos/output.m3u8")
  .on("end", () => {
    console.log("finish to make m3u8 file");
  })
  .run();
