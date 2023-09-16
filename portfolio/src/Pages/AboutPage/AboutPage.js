import React from 'react';
import myPic from '../../Images/transparent-MyPic.png';

import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div>
            <section class="about" id="about">
                <h2 class="heading">About <span>ME</span></h2>
                <div class="about-img">
                    <img src={myPic} alt="My Pic" />
                    <span class="circle-spin"></span>
                </div>
                <div class="about-content">
                    <span>Frontend Developer</span>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam
                        delectus quos explicabo.
                        Et, recusandae expedita. Ut non, fugit magnam necessitatibus praesentium optio animi eos impedit vel
                        nisi amet architecto! Deleniti necessitatibus explicabo repellendus pariatur, reprehenderit sed
                        quibusdam inventore dolorum magni, quisquam culpa qui eligendi facilis! Placeat praesentium ratione
                        voluptatibus!</p>

                    <div class="btn-box">
                        <a href="#portfolio">My Works</a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;