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

// Custom
import Video from './components/video'
import Videorelay from './components/videorelay'

const App = () => {
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
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={3} >
              <Typography variant="h6" component="div" sx={{ flexGrow:1 }} >
                Video
              </Typography>
              <Video
                ip={'144'}
                port={'9999'}
                ffmpegIP={'localhost'}
              />
            </Paper>

          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} >
            <Typography variant="h6" component="div" sx={{ flexGrow:1 }} >
                VideoRelay
              </Typography>
              <Video
                ip={'142'}
                port={'9998'}
                ffmpegIP={'localhost'}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>

    </React.Fragment>
  );
}

export default App;
