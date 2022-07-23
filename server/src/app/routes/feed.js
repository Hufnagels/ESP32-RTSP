import express from 'express'
import Stream from 'node-rtsp-stream'

const router = express.Router()


const feedRoute = router.get('/feed/:name/:ip/:port', (req, res) => {
  console.log('req.params', req.params)
  console.log('req.query', req.query)
  const { brightness, saturation, gamma } = req.query
  let streamOptions = {
    name: req.params.name,
    streamUrl: `rtsp://192.168.1.${req.params.ip}:8554/mjpeg/1`,
    wsPort: req.params.port,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 25, // options with required values specify the value after the key
      '-framerate': 25,
      '-vf': `eq=brightness=${brightness}:saturation=${saturation}:gamma=${gamma}`,
    }
  }

  try {
    const stream = new Stream(streamOptions)

    stream.wsServer.on('connection', function (ws) {
      console.log('connection established')
    })
    stream.wsServer.on('error', function () {
      console.log('wsServer error port in use', req.params.port)
      stream.mpeg1Muxer.stream.kill()
      //stream = new Stream(streamOptions)
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