import React from 'react'
import VideoListItem from '../components/VideoListItem'

const VideoList = ({movieList}) => {

    return (
        <div>
            <ul>
                {
                    movieList.map(movie => {
                         return <VideoListItem key={movie.id} movie={movie}/>
                    })
                }



            </ul>
        </div>
    )
};

export default VideoList