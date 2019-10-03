import React from 'react';
import styles from '../../articles.module.css';
import VideosList from '../../../widgets/VideosList/videosList';


const VideosMain = (props) =>{
    return(
        <div>
            <VideosList
            type="card"
            loadmore={true}
            title={false}
            start={0}
            amount={8}
            />
        </div>
    )
}

export default VideosMain;