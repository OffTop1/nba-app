import React from 'react';
import Slick from 'react-slick';
import styles from './slider.module.css';
import { Link } from 'react-router-dom';

const SliderTemplates = (props) =>{
    let template = null;

    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings
    }

    switch(props.type){
        case("featured"):
        template = props.data.map((item,i)=>{
            return(
                <div key={i}>
                    <div className={styles.featured_items}>
                        <div className={styles.featured_image}
                        style={{
                            background:`url(../images/articles/${item.image})`
                        }}>

                        </div>
                        <Link to={`/articles/${item.id}`}>
                            <div className={styles.featured_caption}>
                                {item.title}
                            </div>
                        </Link> 
                    </div>
                </div>
            )
        })
        break;
        default:
            template = null;
    }

    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates;