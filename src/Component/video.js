import react from 'react'

function Video() {
    return (
        <div className="video-container">
            <iframe width="1350" height="590" src="https://www.youtube.com/embed/mnZeRCrMRFg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Video;