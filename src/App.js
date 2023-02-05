import React ,{useState , useEffect} from 'react'
import SearchBar  from "./components/SearchBar.component"
import VideoList from "./components/VideoList.component"
import VideoItem from "./components/VideoItem.component"
import VideoDetail from "./components/VideoDetail.component"
import "./components/VideoItem.component.css"


const App = () => {

  const [videosData , setVideosData] = useState([]);
  const [selectedVideo , setSelectedVideo] = useState(null);

  useEffect(()=>{
    onTermSubmit("React js")
  } , [])

  const onTermSubmit = async(term)=>{
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}
      &type=video&key=${process.env.REACT_APP_APIKEY}`)
    .then(response => response.json())
    .then(data => {
      setVideosData(data.items)
      setSelectedVideo(data.items[0])
    })
  }

  const onVideoSelect = (video)=>{
    setSelectedVideo(video)
  }

  return (
    <div className = "ui container">
      <SearchBar onFormSubmit = {onTermSubmit} />
      <div className = "ui grid">
        <div className = "responsive ui row">
          <div className = "eleven wide column">
            <VideoDetail video = {selectedVideo}/>
          </div>
          <div className = "five wide column">
            <VideoList onVideoSelect = {onVideoSelect} videos = {videosData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App