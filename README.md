# HLS streaming Service example

## **๐ช** Overview

Node.js๋ก Express์ HLS๋ก ๋์์์ ์คํธ๋ฆฌ๋ฐ ์๋น์ค๋ฅผ ํด๋ณด๋ ์์ ์๋๋ค.

## **๐  Requirement**

- src/videos ํด๋ ์์ video์ด๋ฆ์ผ๋ก mp4 ํ์ผ์ ๋์์์ ๋ฃ์ด์ค๋๋ค.
- .env ์์ฑ ํ PORT๋ฅผ ๋ช์ํด์ค ์ ์์ต๋๋ค. ๋ช์ ์ ํด์ค ์ ๊ธฐ๋ณธ์ผ๋ก 3000ํฌํธ๋ก ์คํ๋ฉ๋๋ค.

## **Get Started**

```
git clone https://github.com/Luceta/HLS-Video-Streaming-Node-HLS.git
cd HLS-Video-Streaming-Node-HLS/
npm install
```

### If you do not have Video file?

๋น๋์ค ํ์ผ์ด ์๋ค๋ฉด ๊ธฐ๋ณธ์ ์ผ๋ก ๋ง๋ค์ด์ง ํ์ผ๋ก ํ์ธ์ด ๊ฐ๋ฅํฉ๋๋ค.

`npm start`

### If you have Video file?

๋น๋์ค ํ์ผ์ด ์๋ค๋ฉด, Videos ํด๋๋ฅผ ํต์งธ๋ก ์ญ์  ํ Src ๋๋ ํ ๋ฆฌ๋ด videos๋ผ๋ ์ด๋ฆ์ผ๋ก ํด๋๋ฅผ ๋ค์ ์์ฑํฉ๋๋ค.
๊ทธ๋ฆฌ๊ณ  video.mp4๋ผ๋ ์ด๋ฆ์ผ๋ก mp4ํ์์ ๋น๋์ค๋ฅผ ๋ฃ์ด์ค๋๋ค.

`cd src`
`node ffmpeg.js` ๋ก m3u8 ํ์ผ ํธ๋์ค์ฝ๋ฉ ํ
`npm start`๋ฅผ ์คํํ์ฌ ํ์ธํ๋ค.

If you have Video file, you delete Videos directory and make videos directory in `src` directory again.
And then, using mp4 media file make file with `video.mp4` in `src/videos`.

move to `src` directory , run `node ffmpeg.js`.
it makes m3u8 files.

run `npm start`.

you can open the developer tools on the web and check `network` panel and you can check it!
