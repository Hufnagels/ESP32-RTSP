import express from "express";
const router = express.Router();

import { REACT_APP_WEBSITE_NAME } from '../config/config.js'

// Default page
const WEBSITE_NAME = REACT_APP_WEBSITE_NAME || 'RTSP STREAM SERVER';
const homeRoute = router.get('/', (req, res) => {
  res.send(`
  <h3>${WEBSITE_NAME} <br />server is up and running</h3>
  ` )
})

export default homeRoute

//<a href="/camera/feed/CAM1/144/9999?brightness=0.2&saturation=1&gamma=1">CAM1</a>