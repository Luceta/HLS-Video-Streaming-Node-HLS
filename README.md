# HLS streaming Service example

## **🚪** Overview

Node.js로 Express와 HLS로 동영상을 스트리밍 서비스를 해보는 예제입니다.

## **🛠 Requirement**

- src/videos 폴더 안에 video이름으로 mp4 파일의 동영상을 넣어줍니다.
- .env 생성 후 PORT를 명시해줄 수 있습니다. 명시 안 해줄 시 기본으로 3000포트로 실행됩니다.

## **Get Started**

```
git clone https://github.com/Luceta/HLS-Video-Streaming-Node-HLS.git
cd HLS-Video-Streaming-Node-HLS/
npm install
```

### If you do not have Video file?

비디오 파일이 없다면 기본적으로 만들어진 파일로 확인이 가능합니다.

`npm start`

### If you have Video file?

비디오 파일이 있다면, Videos 폴더를 통째로 삭제 후 Src 디렉토리내 videos라는 이름으로 폴더를 다시 생성합니다.
그리고 video.mp4라는 이름으로 mp4형식의 비디오를 넣어줍니다.

`cd src`
`node ffmpeg.js` 로 m3u8 파일 트랜스코딩 후
`npm start`를 실행하여 확인한다.

If you have Video file, you delete Videos directory and make videos directory in `src` directory again.
And then, using mp4 media file make file with `video.mp4` in `src/videos`.

move to `src` directory , run `node ffmpeg.js`.

run `npm start`.
