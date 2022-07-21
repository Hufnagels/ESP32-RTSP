import React, { useEffect } from 'react'
import { loadPlayer } from 'rtsp-relay/browser'


const Videorelay = props => {
  const videoRef = React.useRef(null)
  const port = props.port
  const ip = props.ip
  const ffmpegIP = props.ffmpegIP

  React.useEffect(() => {
    if (!videoRef.current) throw new Error('Ref is null')
    loadPlayer({
      url: `ws://${ffmpegIP}/api/stream/${ip}`,
      canvas: videoRef.current,

      // optional
      onDisconnect: () => console.log('Connection lost!'),
    })
  })
  return (
    <React.Fragment>
      <canvas ref={videoRef} style={{ height: "480px", width: "640px" }} ></canvas>
    </React.Fragment>
  )
}

export default Videorelay