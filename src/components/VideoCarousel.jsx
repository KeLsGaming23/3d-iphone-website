import React from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
  return (
    <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list, i) => (
                <div key={list.id} id='slider'>

                    <div className='video-carousel_container'>

                    </div>

                </div>
            ))}
        </div>
    </>
  )
}

export default VideoCarousel