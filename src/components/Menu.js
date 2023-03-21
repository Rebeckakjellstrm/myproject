import React from "react";

import search from '../img/search.png';
import flag from "../img/flag.png";
import checkout from "../img/checkout.png";

import { NavLink, Link } from "react-router-dom";

class Menu extends React.Component{
    render(){
        return(
            <main>
                <body>
                <nav class="main-nav">
                    <div class="language" id="language2">
                        <h3>Språk</h3>
                        <img src={flag} alt="language"/>
                    </div>
                    <ul>
                        <li><NavLink to="/history"
                        activeClassName="active">Historia</NavLink></li>
                        <div class="dropdown-stores">
                            <botton class="dropbtn-stores">Våra butiker</botton>
                            <div class="dropbtn-stores-cont">
                                <NavLink to="/garden" activeClassName="active">Marsipangården</NavLink>
                                <a href="#/">Marsipanladan</a>
                                <a href="#/">Marsipanbåten</a>
                            </div>
                        </div>
                        <div class="dropdown-products">
                            <botton class="dropbtn-prod">Utbud</botton>
                            <div class="dropbtn-prod-cont">
                                <NavLink to="/products" activeClassName="active">Produkter</NavLink>
                                <a href="#/">Kurser</a>
                            </div>
                        </div>
                        <li><a href="#/">Tillverkning</a></li>
                        <li><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
                        <div class="search">
                            <img src={search} alt="search" />
                            <input type="text" placeholder="Sök..." />
                        </div>
                    </ul>
                    <div class="checkout" id="checkout2">
                        <h3>Varukorg</h3>
                        <img src={checkout} alt="checkout"/>
                    </div>
                </nav>
                </body>
            </main>
        )
    }
}

export default Menu;
