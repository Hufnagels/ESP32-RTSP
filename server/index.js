import express from 'express'
import cors from 'cors'

import { createServer } from 'http'

import dotenv from 'dotenv'
dotenv.config()
import expressWs from 'express-ws'
import rtspRelay from 'rtsp-relay'

// Custom
import homeRoutes from './src/app/routes/home.js'
import feedRoutes from './src/app/routes/feed.js'
import { PORT, ORIGIN } from './src/app/config/config.js'

const serverPort = PORT || 5002;
const origin = ORIGIN
const corsOptions = {
  origin,
  credentials: true // <-- REQUIRED backend setting
};

const serverStart = async () => {
  // const app = express()
  const app = expressWs(express()).app

  app.use(cors())


  app.use('/', homeRoutes)
  app.use('/camera', feedRoutes)
  const server = createServer(app)
  const { proxy } = rtspRelay(server, app)
  console.log('proxy: ', proxy)
  app.ws('/api/stream/:cameraIP', (ws, req) => {
    console.log(ws, req.params.cameraIP)
    return proxy({
      url: `rtsp://192.168.1.${req.params.cameraIP}:8554/mjpeg/1`,
      verbose: false,
    })(ws)
  })
  // app.ws('/camera', (ws, req) => {
  //   const stream = new Stream({
  //     streamUrl: 'rtsp://192.168.1.144:8554/mjpeg/1',
  //     wsPort: req.params.port,
  //     ffmpegOptions: { // options ffmpeg flags
  //       '-stats': '', // an option with no neccessary value uses a blank string
  //       '-r': 30 // options with required values specify the value after the key
  //     }
  //   })
  //   ws.on('message', function (msg) {
  //     ws.send(stream);
  //   });
  // })

  // const httpServer = createServer(app)
  app.listen(serverPort, () => {
    if (process.env.NODE_ENV !== 'production') console.log(
      `Server is now running on http://localhost:${serverPort}`,
    )
  })

}

serverStart()