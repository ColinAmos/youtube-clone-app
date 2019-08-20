import React from "react";

import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";

import { SearchBar, VideoDetails, VideoList } from "./components";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        }
    }

    componentDidMount() {
        this.handleSearchSubmit("mario");
    }

    handleVideoClick = (video) => {
        this.setState({
            selectedVideo: video
        });
    }

    handleSearchSubmit = async (searchTerm) => {
        const response = await youtube.get("search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyDRA6dw4qaOe5UxcX4J8NQ3fv_WhYpTrCg",
                q: searchTerm,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    }

    render() {
        const {videos, selectedVideo} = this.state;

        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SearchBar onFormSubmit={this.handleSearchSubmit}/>
                </Grid>
                <Grid item xs={7}>
                    <VideoDetails video={selectedVideo}/>
                </Grid>
                <Grid item xs={5}>
                    <VideoList videos={videos} onVideoClick={this.handleVideoClick}/>
                </Grid>
            </Grid>
        )
    }
}

export default App;