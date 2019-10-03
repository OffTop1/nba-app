import React from 'react';
import styles from '../articles.module.css';


const PostData = (props) =>{
    return(
        <div className={styles.articlePostData}>
            <div>
                Author: 
                <span>{props.data.author}</span>
            </div>
            <div>
                Date: 
                <span>{props.data.date}</span>
            </div>
        </div>
    )
}


export default PostData;