import React from "react";

import { Grid, Paper, Typography, } from "@material-ui/core";

const VideoListItem = ({ video, onVideoClick }) => {
    
    return (
        <Grid item xs={12}>
            <Paper style={{cursor: "pointer"}} onClick={() => onVideoClick(video)}>
                <img src={video.snippet.thumbnails.medium.url}
                    style={{width: "100%", maxWidth: "200px"}}/>
                <Typography variant="subtitle1">{video.snippet.title}</Typography>
                <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
            </Paper>
        </Grid>
        
    );
}

export default VideoListItem;