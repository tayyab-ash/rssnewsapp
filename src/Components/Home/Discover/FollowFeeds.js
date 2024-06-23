import React, { useContext } from 'react'
import userContext from '../../../UserContext'
import styles from './FollowFeeds.module.css'

function FollowFeeds() {
    // const [showPopup, setShowPopup] = useState(false);

    // const togglePopup = () => {
    //   setShowPopup(!showPopup);
    // };
    // const {togglePopup, showPopup} = useContext(userContext)

  return (
    <div className={`${styles.app}`}>
      {showPopup && (
        <div className={`${styles.popup}`}>
          <div className={`${styles.popupcontent}`}>
            <h2>Popup Content</h2>
            <p>This is the content inside the popup.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FollowFeeds