import express from "express";
import hls from "hls-server";
import fs from "fs";

const app = express();

const PORT = process.env.PORT | 3000;
const handleListen = () => console.log(`Listening on http://localhost:${PORT}`);

const server = app.listen(3000, handleListen);

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  return res.render("home");
});

new hls(server, {
  provider: {
    exists: (req, cb) => {
      const ext = req.url.split(".").pop();

      if (ext !== "m3u8" && ext !== "ts") {
        return cb(null, true);
      }

      fs.access(__dirname + req.url, fs.constants.F_OK, function (err) {
        if (err) {
          console.log("File not exist");
          return cb(null, false);
        }
        cb(null, true);
      });
    },
    getManifestStream: (req, cb) => {
      console.log("m3 stream");
      const stream = fs.createReadStream(__dirname + req.url);
      cb(null, stream);
    },
    getSegmentStream: (req, cb) => {
      console.log("ts segement stream");
      const stream = fs.createReadStream(__dirname + req.url);
      cb(null, stream);
    },
  },
});
