# ESP32 RTSP client/server

[a](https://github.com/Hufnagels/ESP32-RTSP/blob/master/assets/camera.png?raw=true)
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
The stream is converted trough ffmpeg in node  (express) server side as it would be a proxy.
## _Server_
Node.js (express) app with [node-rtsp-stream](https://github.com/kyriesent/node-rtsp-stream) package.
## _Board_
ESP32 CAM module [diymore ESP32 CAM Development Board WiFi/Bluetooth ESP32 DC 5V Dual Core Development Board with OV2640 Camera TF Card Module](https://www.amazon.de/-/en/gp/product/B08P1NMPLL/ref=ppx_od_dt_b_asin_title_s02?ie=UTF8&th=1). Firmware uploaded via Arduino IDE with Esp-IDF.

board source: [Circuit rocks](https://learn.circuit.rocks/esp32-cam-with-rtsp-video-streaming)

