# ESP32 RTSP client

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

## _Client_
Client is a simple React app with MUI.
It displays ESP32 Cam streams via JSMpeg player.
The stream is converted trough ffmpeg in node  (express) server side as it would be a proxy with [node-rtsp-stream](https://github.com/kyriesent/node-rtsp-stream) package.
### _Client deployed to Netlify as follows_
**Step1**

On Dashboard in site settings - Repository:
- link Github Repo

**Step2**

On Dashboard in site settings:
- Base directory: client
- Build command: CI=false yarn run build
- Publish directory: client/build
- Deploy log visibility: Logs are public

**Step3**

On Dashboard in site settings - Environment variables:
```
REACT_APP_FFMPEG_IP: <heroku app server name> with https protocol
REACT_APP_DMZ_IP: <own server ip> 
```
which corresponds to the following code:
```sh
fetch(`http://${ffmpegIP}:5002/camera/feed/${name}/${ip}/${port}?brightness=0.2&saturation=1&gamma=1`)
```
#### _Explanation_ 

```sh
`http://${ffmpegIP}:5002
```
> **${ffmpegIp}** --> heroku app name and https protocol

```sh
/camera/feed/${name}/${ip}/${port}
```
> **${name}** --> The Camera name (like: Livingroom)
> **${ip}** --> In the published case the NAT port --> route must be corrected (streamUrl: `rtsp://192.168.1.${req.params.ip}:8554/mjpeg/1`) to (streamUrl: `rtsp://REACT_APP_DMZ_IP:${req.params.ip}/mjpeg/1`)
> **${port}** --> on heroku the wsPort for camera


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
