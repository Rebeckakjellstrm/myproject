import React from "react";

import back from "../img/back.png";
import logo from "../img/logo.png";

import historia from "../img/historia1.png";

import { NavLink, Link } from "react-router-dom";

class History extends React.Component{
    render(){
        return(<main>
            <body id="HISTORY">
            <div class="back">
                <img src={back} alt="back"/>
                <li><NavLink to="/" exact
                activeClassName="active">Tillbaka</NavLink></li>
            </div>
            <section class="history">
                <div>
                    <img id="kutterkonfekt" src={historia} alt="kutterkonfekt"
                     width="50%" height="700px"/>
                    <div class="logo">
                        <a id="logoLink" href="index.html">
                            <img id="logoImg" src={logo} alt="logo" width="200px"/>
                        </a>    
                    </div>
                        <h2>Historia</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolor odit possimus perspiciatis esse voluptates, nostrum 
                            veritatis eius sit ipsa nulla, eligendi culpa! Vel dolorem fugiat 
                            labore iste soluta veniam necessitatibus incidunt dolores, voluptatibus 
                            alias? Suscipit laborum deserunt nulla molestias ex cumque earum necessitatibus? 
                            Nostrum unde eaque tempora rerum sed modi placeat quod atque? Natus odit, eius 
                            architecto officiis molestias nulla quo ad ea rem numquam voluptatem eaque 
                            iusto culpa mollitia.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Animi alias vitae quaerat eos corrupti? 
                            Id molestias debitis hic unde deserunt voluptates quidem, 
                            placeat corporis perspiciatis soluta cupiditate laborum eveniet dolorem!</p>
                </div>
            </section>   
            </body>   
        </main>)
    }
}

export default History;
