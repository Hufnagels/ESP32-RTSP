import * as React from 'react';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Video from './VideoPlayer'

const VideoContainer = props => {
  const iconSize = { height: 30, width: 30 }
  const [checked, setChecked] = React.useState(false);
  const day = {
    brightness: 0.2,
    saturation: 1,
    gamma: 1,
  }
  const night = {
    brightness: 0.3,
    saturation: 1,
    gamma: 1.1,
  }
  const [state, setState] = React.useState(checked ? night : day)
  const handleChange = (event) => {
    setChecked(event.target.checked)
    setState(event.target.checked ? night : day)
  };
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="div"
        height={props.height}
      >
        {
          props.visible &&
          <Video
            {...props}
            {...state}
            width={props.width - 8}
            height={props.height - 8}
            style={{
              width: props.width - 5,
              height: props.height - 32,
            }}
          />
        }
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">{props.name}</Typography>
        {checked &&
          <Stack direction="row" spacing={2} sx={{ border: '1px dashed green' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
              <IconButton aria-label="previous">
                <KeyboardArrowUpIcon sx={{ iconSize }} />
              </IconButton>
              <IconButton aria-label="play/pause">
                <KeyboardArrowDownIcon sx={{ iconSize }} />
              </IconButton>
              <IconButton aria-label="next">
                <KeyboardArrowLeftIcon sx={{ iconSize }} />
              </IconButton>
              <IconButton aria-label="next">
                <KeyboardArrowRightIcon sx={{ iconSize }} />
              </IconButton>
            </Box>

            <Box sx={{ padding: '10px' }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={handleChange} name="Night" />
                  }
                  label="Night"
                />

              </FormGroup>
            </Box>
          </Stack>
        }

      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default VideoContainer