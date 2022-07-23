# ESP32 RTSP server

## Features
- Display video stream via rtsp protocol
- Brightness/Saturation/Gamma properties
- mpeg1 coding

## Planned features
- 3DPrinted DOM house
- Tilt/Pan
- Motion detection --> store mp4
- OpenCV
- auth
- avaliable camera settings via MQTT 

## _Server_
Node.js (express) app with [node-rtsp-stream](https://github.com/kyriesent/node-rtsp-stream) package.
### _Server deployed to Heroku as follows_
**Step1**
```
heroku login -i
```
> Instead password I used **Account/API** key

**Step2**
```
heroku create
```
if we need socket.io, then
```
heroku features:enable http-session-affinity
```

**Step3**

On Dashboard in deploy:
- Deployment method - appropiate GitHub Repo
- Automatically deploys DISABLE

On Dashboard in settings:
- Config Vars
```
PROJECT_PATH : server
```
- Buildpacks
```
https://github.com/timanovsky/subdir-heroku-buildpack
heroku/nodejs
```
**Step4**

On Dashboard in settings:
- Config Vars
```
REMOTE_ORIGIN : <own server ip address where the cameras are in DMZ with NAT>

```
which corresponds to the following code:
```sh
router.get('/feed/:name/:camera/:port', (req, res) => {
...
let streamOptions = {
    name: req.params.name,
    streamUrl: `rtsp://192.168.1.${req.params.camera}:8554/mjpeg/1`,
    wsPort: req.params.port,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 25, // options with required values specify the value after the key
      '-framerate': 25,
      '-vf': `eq=brightness=${brightness}:saturation=${saturation}:gamma=${gamma}`,
    }
  }
```
#### _Explanation_ 

```sh
`rtsp://192.168.1.${req.params.camera}:8554/mjpeg/1`
```
> 192.168.1 musst be changed to the **< server ip address >** where the cameras are, and the **${req.params.camera}** option must be used for the appropiate camera port, which is setted up in in the Router/Gateway NAT table

```sh
wsPort: req.params.port,
```
> wsPort is the Websocket port for the stream to client side
