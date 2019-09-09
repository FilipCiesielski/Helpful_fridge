import React,{Component} from 'react';
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAd } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'



import {NavLink} from "react-router-dom"


class Footer extends Component{
    render() {
        return (

<footer className={"footer"}>
<div className={"container foot"}>
                              <div className={"copy"}>&copy; Created by Filip Ciesielski</div>

    <a target={"_blank"} href='https://www.instagram.com/feel_my_passion/?hl=pl'>
        <FontAwesomeIcon className ='font-awesome' icon={faInstagram} />
    </a>
                              <a target={"_blank"} href='https://github.com/FilipCiesielski'>
                                  <FontAwesomeIcon className ='font-awesome' icon={faGithub} />
                              </a>
        <a target={"_blank"} href='https://www.linkedin.com/in/filipciesielski' >
            <FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></a>

</div>

</footer>
        )
    }
}

export default Footer;