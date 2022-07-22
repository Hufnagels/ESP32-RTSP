import React from 'react'

// Material
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, createTheme, ThemeProvider } from '@mui/system'

// Custom
import Video from './components/video'
import Videorelay from './components/videorelay'
import useResizeObserver from '../src/app/hooks/useResizeObserver.hook'

// const VideoContainer = styled(Paper,{
//   // Configure which props should be forwarded on DOM
//   shouldForwardProp: (prop) =>
//     prop !== 'color' && prop !== 'variant' && prop !== 'sx'  && prop !== 'width' && prop !== 'height',
//   name: 'VideoContainer',
//   slot: 'Root',
//   // We are specifying here how the styleOverrides are being applied based on props
//   overridesResolver: (props, styles) => [
//     styles.root,
//     props.color === 'primary' && styles.primary,
//     props.color === 'secondary' && styles.secondary,
//   ],
// })(({ theme }) => ({
//   color: theme.palette.primary.dark,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: 4,
//   border: '1px dashed red',
//   display: 'flex',
//   flexDirection: 'column',

// }))

const App = () => {

  const videContainerRef = React.useRef(null)
  const dimensions = useResizeObserver(videContainerRef);
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(70)
  const [Videowidth, setVideowidth] = React.useState(0)
  const [Videoheight, setVideoeight] = React.useState(70)

  const [visible, setVisible] = React.useState(false)

  const resizing = dim => {
    console.log('screen.height', dim.height)
    console.log('screen.width', dim.width)
    let newHeight = dim.width / 8 * 3 - 40
    let newWidth = newHeight * 4 / 3
    setWidth(dim.width/2)
    setHeight(dim.width / 8 * 3)
    setVideowidth(dim.width/2)
    setVideoeight(newHeight)
    setVisible(true)
  }

  const cameras = [
    {name: 'Living Room', ip:'142', port:'9999'},
    {name: 'Bed Room', ip:'144', port:'9998'}
  ]

  React.useEffect(() => {
    if (!dimensions) return;
    resizing(dimensions)

  }, [dimensions])

  
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RTSP stream
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ p: 1 }}>
        <Grid sx={{ flexGrow: 1 }} container spacing={1} ref={videContainerRef} >
          {cameras.map( camera => <Grid item xs={6} >
            <Paper
              elevation={1}
              width={width}
              height={height}
              sx={{
                border: '1px dashed red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >{camera.name}</Typography>
              {visible && <Video
                name={camera.name}
                ip={camera.ip}
                port={camera.port}
                ffmpegIP={'localhost'}
                width={width - 8}
                height={height - 32}
                style={{
                  width: width - 5,
                  height: height - 32,
                }}
              />}
            </Paper>

          </Grid>)}
          {/* <Grid item xs={6} ref={videContainerRef}>
            <Paper
              elevation={1}
              width={width}
              height={height}
              sx={{
                border: '1px dashed red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >{cameras[0].name}</Typography>
              <Video
                name={cameras[0].name}
                ip={cameras[0].ip}
                port={cameras[0].port}
                ffmpegIP={'localhost'}
                width={width - 8}
                height={height - 32}
                style={{
                  width: width - 5,
                  height: height - 32,
                }}
              />
            </Paper>

          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={1}
              width={width}
              height={height}
              sx={{
                border: '1px dashed green',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >{cameras[1].name}</Typography>
              <Video
                name={cameras[1].name}
                ip={cameras[1].ip}
                port={cameras[1].port}
                ffmpegIP={'localhost'}
                width={width - 8}
                height={height - 32}
                style={{
                  width: width - 5,
                  height: height - 32,
                }}
              />
            </Paper>
          </Grid> */}
        </Grid>
      </Box>

    </React.Fragment>
  );
}

export default App;
