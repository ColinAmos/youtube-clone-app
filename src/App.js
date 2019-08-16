import React from "react";

import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";

import { SearchBar, VideoDetails, VideoList } from "./components";

const styleGridItem = {
    //backgroundColor: "",
    //border: "2px black dotted"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        }
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
        return (
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={styleGridItem}>
                            <SearchBar onFormSubmit={this.handleSearchSubmit}/>
                        </Grid>
                        <Grid item xs={8} style={styleGridItem}>
                            <VideoDetails />
                        </Grid>
                        <Grid item xs={4} style={styleGridItem}>
                            <VideoList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;