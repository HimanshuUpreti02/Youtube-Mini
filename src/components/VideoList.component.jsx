import React from 'react'
import VideoItem from "./VideoItem.component"

const VideoList = ({videos , onVideoSelect}) => {

	const renderedList = videos.map((video , index)=>{
			return(
				<VideoItem key={index} 
				onVideoSelect = {onVideoSelect}
				video = {video}/>
			)
	})

	return(
			<div className = "ui relaxed divided list">
				{renderedList}
			</div>
		)
	}

export default VideoList