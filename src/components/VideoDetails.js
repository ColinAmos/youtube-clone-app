import React from "react";

import { Paper, Typography } from "@material-ui/core";

import he from "he";

const VideoDetails = ({ video }) => {
    if (!video) return (
        <Typography variant="subtitle1">Loading...</Typography>
    );

    const videoId = video.id.videoId;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    
    const videoContainerStyle = {
        position: "relative",
        overflow: "hidden",
        paddingTop: "56.25%",
    }

    const videoIframeStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        border: "0",
    }

    return (
        <React.Fragment>
            <Paper elevation={6} style={videoContainerStyle}>
                <iframe frameBorder="0" style={videoIframeStyle} title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h5">{he.decode(video.snippet.title)}</Typography>
                <Typography variant="subtitle1">{he.decode(video.snippet.channelTitle)}</Typography>
                <Typography variant="subtitle2">{he.decode(video.snippet.description)}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails;