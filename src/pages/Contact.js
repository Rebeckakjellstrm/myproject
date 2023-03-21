import React from "react";

import back from '../img/back.png';
import logo from '../img/logo.png';

import { NavLink, Link } from "react-router-dom";

class Contact extends React.Component{
    render() {
        return(
            <main>
                <body id="CONTACT">
                    <div class="wrapper">
                        <div class="back">
                            <img src={back} alt="back" width="30px"/>
                            <li><NavLink to="/" exact
                            activeClassName="active">Tillbaka</NavLink></li>
                        </div>
                        <section class="top-contact">
                            <a href="index.html">
                                <img src={logo} alt="logo" width="250px"/>
                            </a>
                            <h1>Kontakta oss</h1>
                        </section>
                        <section class="contact-info">
                            <h3>Telefon</h3>
                            <table>
                                <tr>
                                    <td>Marsipangården</td>
                                    <td>070 XXX XX XX</td>
                                </tr>
                                <tr>
                                    <td>Marsipanladan</td>
                                    <td>070 XXX XX XX</td>
                                </tr>
                                <tr>
                                    <td>Marsipanbåten</td>
                                    <td>070 XXX XX XX</td>
                                </tr>
                            </table>
                            <h3>Email</h3>
                            <p>info@kutterkonfekt.se</p>
                            <h3>Ställ en fråga!</h3>
                            <form action="action_page.php">
                                <label for="fname">Förnamn</label>
                                <input type="text" id="fname" name="firstname" placeholder="Skriv här.."/>
                                <label for="fname">E-mail</label>
                                <input type="text" id="fname" name="firstname" placeholder="Skriv här.."/>
                                <label for="subject">Vad vill du fråga oss?</label>
                                <textarea id="subject" name="subject" placeholder="Skriv här.."></textarea>
                                <button id="btn-submit" type="button">Submit</button>
                            </form>
                            <h1>Hitta hit</h1>
                            <ul>
                                <li><a href="marsipangarden.html">Marsipangården</a></li>
                                <li><a href="#/">Marsipanladan</a></li>
                                <li><a href="#/">Marsipanbåten</a></li>
                            </ul>
                        </section>
                    </div>
                </body>
            </main>);
        }
}

export default Contact;