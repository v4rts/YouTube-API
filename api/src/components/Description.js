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

                </Paper>
            </React.Fragment>
        );
}
export default Description;