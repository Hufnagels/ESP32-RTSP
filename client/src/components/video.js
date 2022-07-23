import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";

// const ffmpegIP = "localhost";

const Video = props => {
  const videoRef = React.useRef(null)
  // const port = props.port
  // const ip = props.ip
  // const ffmpegIP = props.ffmpegIP
  const { name, port, ip, ffmpegIP, width, height } = props

  useEffect(() => {
    console.log('useEffect video')
    if (!videoRef.current) throw new Error('Ref is null')
    fetch(`http://${ffmpegIP}:5002/camera/feed/${name}/${ip}/${port}?brightness=0.2&saturation=1&gamma=1`)
      .then(response => {
        //response.json()
        console.log('response', response.status)
        if (response.status !== 200) return
        var videoUrl = `ws://${ffmpegIP}:${port}`;
        var player = new JSMpeg.VideoElement(videoRef.current, videoUrl, {
          autoplay: true,
        });
        console.log(player);
      })
  });

  return (
    <React.Fragment>
      <div
        ref={videoRef}
        key={new Date}
        id="video-canvas"
        // style={{ height:'100%', width: '100%', }}
        style={{
          width: width,
          height: height,
        }}
      />
    </React.Fragment>
  );
};

export default Video;