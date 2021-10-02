import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import styles from "./developers.modules.css"




function Developers() {
    return (
        <div className = {styles.container}>
            <h2>Know the Developer</h2>
            <h4 id="idh4">This web application is developed by SHREY , he is currently working on making it more influential to make people benifit from it</h4>
             <p id="p1">Places where you can find and asked him about his stuff's and work
            <span id ="id1"><a href="https://github.com/shreykoradia"><FontAwesomeIcon className ='font-awesome' icon={faGithub} /></a></span>
            <span id='id2'><a href="https://linkedin.com/shreykoradia"><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></a></span></p>
        </div>
    )
}

export default Developers
