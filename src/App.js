import React , {useState , useEffect} from 'react';
import {Grid , Container} from '@material-ui/core'
import YoutubeApi from './Api/YoutubeApi'
import Search from './Components/Search';
import VideoList from './Components/VideoList';
import VideoDetails from './Components/VideoDetails';
import {ApiKey} from './Api/Keys';
function App() {
  //Setup State To Store Data From Api
  const [DataVideos , setDataVideos ] = useState([ ]);
  //setup State For Current Video 
  const [CurrentVideo , setCurrentVideo] = useState(null);
  // Async function to FetchData from Api
  const FetchData = async (SerchTerm = 'javascript') => {
    const respond = await YoutubeApi.get('search' , {
      params:{
        part:'snippet',
        maxResults:5,
        key:ApiKey,
        q: SerchTerm
    }
    });
    //fill state with data 
    await setDataVideos(respond.data.items);
    await setCurrentVideo(respond.data.items[1]);
  }
  //useEffect To Fetch Data When Page Loaded 
  useEffect(() => {
    FetchData();
  }, [ ]);
  //Function to Change CurrentVideo 
  const ChangeVideo = (video) => {
    setCurrentVideo(video);
  }
  return (
    <div className="App">
      <Container>
        <Search FetchData = {FetchData} />
        {DataVideos.length ? (
          <Grid container>
          <Grid xs={12} md={8}>
            <VideoDetails Details={CurrentVideo} />
          </Grid>
          <Grid xs={12} md={4}>
            <VideoList ChangeVideo={ChangeVideo} DataVideos={DataVideos} />
          </Grid>
        </Grid>
        ) : (
          <h3 style={{textAlign:"center"}}>Loading...</h3>
        )}
      </Container>
    </div>
  );
}

export default App;
