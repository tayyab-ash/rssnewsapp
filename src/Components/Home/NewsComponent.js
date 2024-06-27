import React from 'react'
import styles from "./NewsComponent.module.css"

function NewsComponent(props) {
    let { title, description, newsUrl, imageUrl} = props;

    const descriptionLength = 20
    const truncateText = (text) => {
      const words = text.split(' ');
      return words.slice(0, descriptionLength).join(' ') + (words.length > descriptionLength ? '...' : ''); 
    };
  return (
    <div>
        <div>
            {/* <div className={`${styles.providerName}`}>
                <p>FEED PROVIDER</p>
            </div> */}
            <div className={`${styles.mainNewsComponent}`}>
                <div className={`${styles.imgSection}`}>
                  <a href={newsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    <img src={imageUrl === null? 'https://i.ibb.co/zXk0dXC/News-APP-2.png': imageUrl} 
                    // onError={handleImageError} 
                    alt="" /></a>  
                </div>  
                <div className={`${styles.newsDescription}`}>
                    <h3>{title ==='[Removed]'? 'Sorry! This news is not avaiable right now. Please refresh to update news catalog!' : title}</h3>
                    <p>{description && truncateText(description)}.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsComponent