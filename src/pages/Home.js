import React from "react";

import kutterkonfekt from '../img/kutterkonfekt.png';
import kutterkonfekt2 from '../img/kutterkonfekt2.png';
import kutterkonfekt3 from '../img/kutterkonfekt3.png';
import kutterkonfekt4 from '../img/kutterkonfekt4.png';


class Home extends React.Component{
    render() {
        return(
            <main id="HOME"> 
                <section class="background">
                    <img src={kutterkonfekt} alt="kutterkonfekt" />
                    <div class="welcome">
                        <h1>Välkommen till Kutterkonfekt!</h1>
                    </div>
                </section>
                <section class="gallery">
                    <h2 onmouseover="scaleUp(this)" onmouseout="scaleDown(this)">Galleri</h2>
                </section>
                <section class="pictures">
                    <h3>Bilder</h3>
                </section>
                <section class="portfolio">
                    <img id="pic1" class="pic1" src={kutterkonfekt2} alt="kutterkonfekt" />
                    <img id="pic2" class="pic2" src={kutterkonfekt3} alt="kutterkonfekt" />
                    <img id="pic3" class="pic3" src={kutterkonfekt4} alt="kutterkonfekt" />
                </section>
                <section class="video">
                    <h3>Videos</h3>
                </section>
                <section class="port-video">
                    <div>
                        <iframe src="https://www.youtube.com/embed/mf8ysPpuHbc" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                        <h4>Trosa Marsipangården</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam.</p>
                    </div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/yuXrfWzAPLA" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe> 
                        <h4>Halloween 2002</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;