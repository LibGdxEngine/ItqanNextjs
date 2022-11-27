import classes from "./VideosList.module.css";
import {useEffect, useState} from "react";

const VideosList = (props) => {
    const course = props.course;
    const videos = course.lessons;
    let selectedItemClass = classes.item + " " + classes.active;
    const [selectedVideo, setSelectedVideo] = useState(videos[0])

    function handleVideoItemClick(video, event) {
        setSelectedVideo(video);
    }

    return <div className={classes.videoContainer}>
        <div className={classes.videoContainer}>

            <ul className={classes.videos}>
                {videos.map((video) => {
                    return <div key={video.video_id}>
                        <li onClick={() => handleVideoItemClick(video)}>
                            <div>
                                <span className={classes.icon}></span>
                            </div>
                            <div
                                className={video.video_id === selectedVideo.video_id ? selectedItemClass : classes.item}>
                                {video.title}
                            </div>
                        </li>
                    </div>
                })}
            </ul>
        </div>
        <div className={classes.info}>
            <iframe className={classes.videoPlayer}
                    src={"https://drive.google.com/file/d/" + selectedVideo.video_id + "/preview"} width="640"
                    height="480"
                    allowFullScreen={true}
                    allow="autoplay"></iframe>

            {/*<video */}
            {/*       poster="/header.jpg"*/}
            {/*       src={selectedVideo.video_id}*/}
            {/*       controlsList="nodownload"*/}
            {/*       type="video/mp4"*/}
            {/*       autoPlay={selectedVideo === videos[0] ? false : true}*/}
            {/*       controls={true}*/}
            {/*/>*/}
        </div>
    </div>

};

export default VideosList;