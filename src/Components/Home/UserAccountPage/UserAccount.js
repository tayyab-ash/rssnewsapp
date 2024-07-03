import React from "react";
import styles from "./UserAccount.module.css";
import { Link } from "react-router-dom";

import { useState, useContext } from "react";
import userContext from "../../../UserContext";

function UserAccount() {
  const {isVisible, setIsVisible, handleClose, userData} = useContext(userContext);
  return (
    <div>
      
      <div className={`${styles.userContainer}`}>
        <div className={`${styles.innerContainer} `}>
          <div>
            <h2>Profile</h2>
          </div>
          <hr />
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="d-flex flex-column d-inline">
                <div className={`${styles.imgContainer}`}></div>
                <div className={`${styles.imgButtons} mt-3`}>
                  <button>Upload new</button>
                  <button>Remove</button>
                </div>
              </div>
            </div>
            <div className={`${styles.userDetail} col-lg-6 mt-4`}>
              <form action="">
                <label className={` form-label mb-2`} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={userData.fname}
                  className={`${styles["form-control"]} form-control`}
                />

                <label className={` form-label mt-4 mb-2`} htmlFor="name">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={userData.email}
                  // defaultValue={}
                  className={`${styles["form-control"]} form-control`}
                />
                <button>Save Changes</button>
              </form>
              <div className={`${styles.logoutBtn}`}>
                     <button onClick={()=> setIsVisible(true)}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
