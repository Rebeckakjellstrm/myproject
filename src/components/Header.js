import React from "react";

import flag from "../img/flag.png";
import logo from "../img/logo.png";
import checkout from "../img/checkout.png";

class Header extends React.Component {
    render() {
        return (
            <header class="top">
                <div class="language">
                    <h3 id="lang">Språk</h3>
                    <img id="langImg" src={flag} alt="language" />
                </div>
                <div class="logo">
                    <img id="homeLogo" src={logo} alt="logo" />
                </div>
                <div class="checkout">
                    <h3>Varukorg</h3>
                    <img onmouseover="rotateImg(this)" onmouseout="normalImg(this)" 
                    src={checkout} alt="checkout" />
                </div>
            </header>
        )
    }
}

export default Header;