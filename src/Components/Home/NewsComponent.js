import React from 'react'
import styles from "./NewsComponent.module.css"
import img from './images/img.jpg'
import { useState } from 'react'

function NewsComponent(props) {
    const [imageSrc, setimageSrc] = useState(props.imageUrl || 'https://i.ibb.co/JvHLYH0/News-APP-1.png')
    const handleImageError = () => {
        setimageSrc('https://i.ibb.co/zXk0dXC/News-APP-2.png')
      };
    let { title, description, newsUrl, author, date, source } = props;
  return (
    <div>
        <div>
            {/* <div className={`${styles.providerName}`}>
                <p>FEED PROVIDER</p>
            </div> */}
            <div className={`${styles.mainNewsComponent}`}>
                <div className={`${styles.imgSection}`}>
                  <a href={newsUrl} target="_blank" rel="noopener noreferrer"><img src={imageSrc} onError={handleImageError} alt="" /></a>  
                </div>  
                <div className={`${styles.newsDescription}`}>
                    <h3>{title ==='[Removed]'? 'Sorry! This news is not avaiable right now. Please refresh to update news catalog!' : title}</h3>
                    <p>{description === '[Removed]'? 'Description not available. Click read more for details.' : description}.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsComponent