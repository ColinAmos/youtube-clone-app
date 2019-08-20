import React from "react";

import { Grid } from "@material-ui/core";

import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoClick }) => {
    const listOfVideos = videos.map(
        (video, i) => <VideoListItem video={video} key={i} onVideoClick={onVideoClick}/>
    )

    return (
        <Grid container spacing={2}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;