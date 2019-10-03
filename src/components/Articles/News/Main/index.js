import React from 'react';
import styles from '../../articles.module.css';
import NewsSlider from '../../../widgets/newsSlider/slider';
import NewsList from '../../../widgets/newsList/newsList';

const NewsMain = (props) =>{
    return(
        <div>
            <NewsSlider
            start={0} 
            amount={3}
            settings={{
                dots:false
            }}
            />
            <NewsList
            type="cardMain"
            loadmore={true}
            start={3}
            amount={6}
            />
        </div>
    )
}

export default NewsMain;