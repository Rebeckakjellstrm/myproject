import React from "react";

import back from "../img/back.png";
import praliner from "../img/praliner.png";
import praliner2 from "../img/praliner2.png";
import praliner3 from "../img/praliner3.png";
import marsipan from "../img/marsipan.png";
import marsipan2 from "../img/marsipan2.png";
import marsipan3 from "../img/marsipan3.png";
import choklad from "../img/choklad.png";
import choklad2 from "../img/choklad2.png";
import choklad3 from "../img/choklad3.png";
import fika from "../img/fika.png";
import fika2 from "../img/fika2.png";
import kutterkonfekt4 from "../img/kutterkonfekt4.png";

import { NavLink, Link } from "react-router-dom";

class Products extends React.Component{
    render() {
        return(<main>
            <body id="PROD">
            <div class="back">
                <img src={back} alt="back" width="30px"/>
                <li><NavLink to="/" exact
                activeClassName="active">Tillbaka</NavLink></li>
            </div>
            <section class="products">
                <li><a href="#/"><h1>Praliner</h1></a></li>
                <div class="praliner">
                    <div class="inrepraliner">
                        <img src={praliner} alt="praliner" width="30%"/>
                        <img src={praliner2} alt="praliner" id="praliner2" width="40%"/>
                        <img src={praliner3} alt="praliner" width="30%"/>
                    </div>
                </div>
                <li><a href="#"><h1>Marsipan</h1></a></li>
                <div class="marsipan">
                    <div class="inremarsipan">
                        <img src={marsipan} alt="marsipan" width="30%"/>
                        <img src={marsipan2} alt="marsipan" width="35%"/>
                        <img src={marsipan3} alt="marsipan" width="35%"/>
                    </div>
                </div>
                <li><a href="#/"><h1>Choklad</h1></a></li>
                <div class="choklad">
                    <div class="inrechoklad">
                        <img src={choklad} alt="choklad" width="35%"/>
                        <img src={choklad2} alt="choklad" width="35%"/>
                        <img src={choklad3} alt="choklad" width="30%"/>
                    </div>
                </div>
                <li><a href="#/"><h1>Bakverk</h1></a></li>
                <div class="fika">
                    <div class="inrefika">
                        <img src={fika} alt="fika" width="35%"/>
                        <img src={fika2} alt="fika" width="30%"/>
                        <img src={kutterkonfekt4} alt="fika" width="35%"/>
                    </div>
                </div>
            </section>
            <script type="text/javascript" src="//code.jquery.com/jquery-3.6.3.min.js"></script>
            <script type="text/javascript" src="//jquery-ui-1.13.2"></script>
            <script type="text/javascript" src="../script.js"></script>    
            </body>
        </main>)
    }
}

export default Products;