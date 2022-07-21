import express from 'express'
import Stream from 'node-rtsp-stream'

const router = express.Router()


const feedRoute = router.get('/feed/:camera/:port', (req, res) => {
  console.log(req.params)
  let streamOptions = {
    name: req.params.camera,
    streamUrl: `rtsp://192.168.1.${req.params.camera}:8554/mjpeg/1`,
    wsPort: req.params.port,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 30 // options with required values specify the value after the key
    }
  }
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify(req.params, null, 3))
  // return
  // rtsp://192.168.1.144:8554/mjpeg/1
  // if (req.params.camera == 1) {
  //   var ip_address2 = "192.168.1.12"
  //   var username2 = "admin";
  //   var password2 = "admin";
  // } else if (req.params.camera == 2) {
  //   var ip_address2 = "192.168.1.10"
  //   var username2 = "admin";
  //   var password2 = "admin";
  // }
  try {
    const stream = new Stream(streamOptions)
    stream.wsServer.on('error', function() {
      console.log('wsServer error port in use', req.params.port)
      stream.mpeg1Muxer.stream.kill()
  })
    res.send('OKS')
  } catch (error) {
    console.log('stream error', error)
    res.send('ERROR')
  }

  //res.setHeader('Content-Type', 'application/json')
  //res.send(JSON.stringify({'message':'success'}))

  //res.send(stream);
})

export default feedRoute