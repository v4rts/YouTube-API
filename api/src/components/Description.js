import React from 'react';
import {Paper, Typography} from "@material-ui/core";

const Description = ( {video} ) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc = 'https://www.youtube.com/embed/${video.id.videoID}';

        return (
            <React.Fragment>
                <Paper elevation = {6} style = {{height : '70%'}}>
                    <iframe frameBorder = "0" height = "100%" width = "100%" title = "Player" src = {videoSrc}/>
                </Paper>

                <Paper elevation = {6} style = {{padding : '15px'}}>
                    <Typography variant="h4">{video.snippet.title}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        );
}
export default Description;