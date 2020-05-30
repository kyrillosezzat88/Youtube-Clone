import React from 'react'
import {Grid , Container , Box , Paper} from '@material-ui/core'
export default function VideoList({DataVideos , ChangeVideo}) {
    return (
        <div className='VideoList'> 
            <Container>
                <Grid container>
                {    
                    //check if there is vides or not 
                    DataVideos.length ? (
                        DataVideos.map(video => (
                        <Grid xs={12} key={video.id}>
                            <Paper onClick={() => ChangeVideo(video)} variant='outlined' style={{margin:"5px 0", display:"flex", justifyContent:"center" , flexDirection:"column" , alignItems:"center" , padding:"5px" , cursor:"pointer"}}>
                                <Box>
                                    {/* <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} height='100%' width='100%' frameBorder="0" /> */}
                                    <img src={video.snippet.thumbnails.medium.url} alt=""/>
                                </Box>
                                <Box>
                                    <h6>{video.snippet.title}</h6>
                                </Box>  
                            </Paper>
                        </Grid>
                        ))
                    ) : (
                        <Grid xs={12}>
                            <Box>
                                <p className='Loading'>Loading...</p>
                            </Box>
                        </Grid>
                    )
                }
                </Grid>
            </Container>
        </div>
    )
}
