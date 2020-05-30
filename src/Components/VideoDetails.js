import React from 'react'
import {Container , Grid , Paper} from '@material-ui/core'
const CurrentVideo = ({Details}) => {
    return(
        <div className="Current">
            <Container>
                <Grid container>
                    <Grid xs={12}>
                    {console.log(Details)}
                        {Details ? (
                            <Paper elevation={3} style={{height:"500px"}}>
                                <iframe title={Details.snippet.title} src={`https://www.youtube.com/embed/${Details.id.videoId}`} height='80%' width='100%' frameBorder="0" />
                                <h6 style={{padding:"0 10px"}}>{Details.snippet.title}</h6>
                            </Paper>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default CurrentVideo;