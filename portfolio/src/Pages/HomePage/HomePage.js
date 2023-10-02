import React from 'react';
import "./HomePage.scss";

import bg_vdo from '../../Images/bg-vdo.mp4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub  } from '@fortawesome/free-solid-svg-icons'
import { faGithub , faLinkedinIn , faInstagram} from '@fortawesome/free-brands-svg-icons'

const HomePage = () => {
    return (

        <div><section className="home show-animate" id="home">
            <video autoPlay loop muted className="bg-vdo" src={bg_vdo} />
            <div className="home-content">
                <h1>Hi,I'm <br /> Arpitam Saha</h1>
                <div className="animated-text">
                    <span>Frontend Developer </span>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptate impedit inventore harum eos
                    modi beatae minus ut consequatur. Architecto.</p>
                <div className="btn-box">
                    <a href="/about">About Me</a>
                </div>
            </div>
            <div className="social-media">
                <a href="https://github.com/ArpitamSaha" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} beatFade size="2xl" style={{color: "#4a0962",}} /></a>
                <a href="http://www.linkedin.com/in/arpitamsaha" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} beatFade size="2xl" style={{color: "#4a0962",}} /></a>
                <a href="https://www.instagram.com/im.arpitam_saha" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} beatFade size="2xl" style={{color: "#4a0962",}} /></a>
            </div>
        </section></div>
    );
};

export default HomePage;