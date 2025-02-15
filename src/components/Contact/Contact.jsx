import React from 'react'
import emailicon from "../../../assets/contact/emailIcon.png"
import gitIcon from "../../../assets/contact/githubIcon.png"
import lnIcon from "../../../assets/contact/linkedinIcon.png"
import styles from "./Contact.module.css";
export const Contact = () => {
  return <footer id = "contact" className = {styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul  className={styles.links}>
        <li  className={styles.link}>
            <img src={emailicon} alt = "Email Icon"/>
            <a href = "mailto:clarencesamuel008@gmail.com">clarencesamuel008@gmail.com</a>

        </li>
        <li className={styles.link}>
            <img src={lnIcon} alt = "Linkedin Icon"/>
            <a href = "https://www.linkedin.com/in/clarence-samuel-555241305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Clarence Samuel</a>
            
        </li>
        <li className={styles.link}>
            <img src={gitIcon} alt = "Github Icon"/>
            <a href = "https://github.com/Clarence005">Clarence005</a>
            
        </li>
    </ul>
  </footer>
}
