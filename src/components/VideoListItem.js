import React from "react";

import { Grid, Paper, Typography, } from "@material-ui/core";

import he from "he";

const VideoListItem = ({ video, onVideoClick }) => {

    return (
        <Grid item xs={12}>
            <Paper style={{cursor: "pointer", overflow: "hidden" }} onClick={() => onVideoClick(video)}>
                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                    <img src={video.snippet.thumbnails.medium.url} alt="" style={{ width: "200px", flexGrow: "1" }}/>
                    <div style={{ width: "200px", flexGrow: "1", padding: "6px", boxSizing: "border-box" }}>
                        <Typography variant="subtitle1" style={{ lineHeight: "1.2em" }}>{he.decode(video.snippet.title)}</Typography>
                        <Typography variant="subtitle2">{he.decode(video.snippet.channelTitle)}</Typography>
                    </div>
                </div>
                
            </Paper>
        </Grid>
    );
}

export default VideoListItem;