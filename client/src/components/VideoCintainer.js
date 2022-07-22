import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Video from './video'

const VideoContainer = props => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="div"
        height={props.height}
      >
        {
          props.visible &&
          <Video
            name={props.name}
            ip={props.ip}
            port={props.port}
            ffmpegIP={'localhost'}
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
        <Typography gutterBottom variant="h5" component="div">{props.name}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <KeyboardArrowUpIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="play/pause">
            <KeyboardArrowDownIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            <KeyboardArrowLeftIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            <KeyboardArrowRightIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default VideoContainer