import React from "react";
import styles from './ConfirmLogout.module.css'
import { useState, useContext } from "react";
import { Link, useNavigate , useHistory} from "react-router-dom";
import userContext from "../../../UserContext";


function ConfirmLogout() {
   const navigate = useNavigate()
//    const history = useHistory()

    const {isVisible, handleClose} = useContext(userContext);

//     const [isVisible, setIsVisible] = useState(true); // State to manage visibility

//   const handleClose = () => {
//     setIsVisible(false); // Hide the modal on click
//   };
const handleLogout = ()=>{
    localStorage.removeItem('token');

    // Use history.replaceState to prevent navigation to previous pages
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    // Function to handle 'popstate' event
    function handlePopState() {
      window.history.pushState(null, '', window.location.href);
      navigate('/');
    }
}
  return (
    <div>
      {isVisible && (
        <div id="logoutModel" onClick={handleClose} className={styles.logoutPopupModel}>
          <div className={styles.logoutDialogBox}>
            <p>Are you sure you want to logout?</p>
            <div className={styles.confirmBtns}>
                <Link to='/'>
              <button onClick={handleLogout} className={styles.btnYes}>Yes</button>
                </Link>
              <button onClick={handleClose} className={styles.btnNo}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmLogout;
