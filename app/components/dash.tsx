import React from "react";
import styles from "../page.module.css";

const Dash = () => {
    return (
        <div className={styles.intro}>
            <br /><h1>Digital Education,<br />Real Transformation</h1><br />
            <p>Digital education opens doors to real opportunities. <br />Our platform is designed to empower you with <br />cutting-edge skills.</p>
           <br /> <button className={styles.button}>Start Now</button>
        </div>
        
    );
};
export default Dash;