import React from 'react';

import TempConvertor from '../../Images/Temp-convertor.jpg';
import Hunation from '../../Images/Hunation.jpg';
import GymWebsite from '../../Images/GYM Website.jpg';
import NetflixClone from '../../Images/Netflix-Clone.jpg';
import AmazonClone from '../../Images/Amazon-Clone.jpg';
import DiceGame from '../../Images/DiceGame.jpg';
import Plantlet from '../../Images/Plantlet.jpg';
import ToDOList from '../../Images/To-Do-List.jpg';

import "./PortfolioPage.css";
const Portfolio = () => {
    return (
        <div>
            <section class="portfolio" id="portfolio">
                <h2 class="heading"><span>My</span> Portfolio</h2>

                <div class="work-section">

                    <div class="work left">
                        <h2>Hunation</h2>
                        <div class="work-img">
                            <a href=""><img src={Hunation} alt="Hunation" /></a>
                        </div>
                        <p>This is a restaurant Website made using React Js | CSS | Java Script</p>
                    </div>
                    <div class="work left">
                        <h2>To Do List</h2>
                        <div class="work-img">
                            <a href=""><img src={ToDOList} alt="Alternate" /></a>
                        </div>
                        <p>Daily To Do List made with html | CSS | Java Script</p>
                    </div>
                    <div class="work right">
                        <h2>Temperature Convertor</h2>
                        <div class="work-img">
                            <a href=""> <img src={TempConvertor} alt="Alternate" /></a>
                        </div>
                        <p>Celcius to Faranheit to Kelvin Convertor using Java Script</p>
                    </div>
                    <div class="work right">
                        <h2>Plantlet</h2>
                        <div class="work-img">
                            <a href=""><img src={Plantlet} alt="Alternate" /></a>
                        </div>
                        <p>Hackathon project built using React Js | Firebase</p>
                    </div>
                    <div class="work left">
                        <h2>Dice Game</h2>
                        <div class="work-img">
                            <a href=""><img src={DiceGame} alt="Alternate" /></a>
                        </div>
                        <p>A simple dice game made with HTML | CSS | Java Script</p>
                    </div>
                    <div class="work left">
                        <h2>Get-Set-Fit</h2>
                        <div class="work-img">
                            <a href=""><img src={GymWebsite} alt="Alternate" /></a>
                        </div>
                        <p>This is a restaurant Website made using React Js | CSS | Java Script</p>
                    </div>
                    <div class="work right">
                        <h2>Netflix-Clone</h2>
                        <div class="work-img">
                            <a href=""><img src={NetflixClone} alt="Alternate" /></a>
                        </div>
                        <p>This is a restaurant Website made using React Js | CSS | Java Script</p>
                    </div>
                    <div class="work right">
                        <h2>Amazon-Clone</h2>
                        <div class="work-img">
                            <a href=""><img src={AmazonClone} alt="Alternate" /></a>
                        </div>
                        <p>This is a restaurant Website made using React Js | CSS | Java Script</p>
                    </div>

                </div>

                <div class="btn-box" style={{ textAlign: "center", marginTop: "2rem" }}>
                    <a href="#portfolio">Contact</a>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;