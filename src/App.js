import React from "react";

import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";

import { SearchBar, VideoDetails, VideoList } from "./components";

const styles = {
    backgroundColor: "red",
    border: "2px black dotted"
}

class App extends React.Component {
    render() {
        return (
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={styles}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={8} style={styles}>
                            <VideoDetails />
                        </Grid>
                        <Grid item xs={4} style={styles}>
                            <VideoList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;