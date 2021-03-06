import React from 'react'
const BASE_URL='https://www.youtube.com/embed/'

const Video = ({videoId}) =>{
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe src={`${BASE_URL}${videoId}`} className="embed-responsive-item"></iframe>
        </div>
    )
}

export default Video
