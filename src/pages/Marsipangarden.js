import React from "react";

import logo from "../img/logo.png";
import back from "../img/back.png";

import { NavLink, Link } from "react-router-dom";

class Marsipangarden extends React.Component{
    render(){
        return(<main>
            <body id="GARDEN">
                <div class="wrapper">
                    <div class="back">
                        <img src={back} alt="back" width="30px"/>
                        <li><NavLink to="/" class="active">Home</NavLink></li>
                    </div>
                    <section class="top-garden">
                        <a href="index.html">
                            <img src={logo} alt="logo" width="250px"/>
                        </a>
                        <h1>Marsipangården</h1>
                    </section>
                    <section class="info-garden">
                        <div class="desc">
                            <li><h1><a href="#/">Beskrivning</a></h1></li>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Error at temporibus saepe 
                                dolore voluptatibus esse inventore magni harum 
                                doloremque, aliquam architecto ab molestias corporis 
                                officiis nisi voluptate fugit quis eveniet!</p>
                            <p>...</p>
                            <li><a href="#/">Läs mer</a></li>
                        </div>
                        <div class="info">
                            <li><h1><a href="#/">Viktig info</a></h1></li>
                            <p>Lorem ipsum dolor sit 
                                amet consectetur, adipisicing 
                                elit. Cumque, quo?</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="open">
                            <li><h1><a href="#/">Öppettider</a></h1></li>
                            <h4>Måndag - Fredag</h4>
                            <p>10.00 - 18.00</p>
                            <h4>Lördag</h4>
                            <p>11.00 - 16.00</p>
                            <h4>Söndag</h4>
                            <p>Stängt</p>
                        </div>
                        <div class="map">
                            <li><h1><a href="#/">Hitta hit</a></h1></li>
                            <li><a href="https://www.google.com/maps?ll=58.900167,17.547684&z=13&t=m&hl=en-US&gl=US&mapclient=embed&q=%C3%96stra+L%C3%A5nggatan+64+619+30+Trosa">
                                Öppna i kartor</a></li>
                                <p>Östra Långgatan 64</p>
                                <p>61991 Trosa</p>
                                <iframe width="150px" height="150px" id="gmap_canvas" 
                                    src="https://maps.google.com/maps?q=%C3%B6stra%20l%C3%A5nggatan%2064%20trosa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                                <a href="https://123movies-i.net"></a>
                                <a href="https://www.embedgooglemap.net"></a>
                        </div>
                    </section>
                </div>
            </body>
        </main>);
    }
}

export default Marsipangarden;