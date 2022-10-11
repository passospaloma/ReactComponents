import React from 'react';
import './style.css';

import Textp from '../img/text.png';
import Planet1 from '../img/planet1.png';
import Planet2 from '../img/planet2.png';
import Astronaut from '../img/astronaut.png';
import Rocket from '../img/rocket.png';
import Parallax from 'parallax-js';


export default function Header() {

    window.onload = function () {

        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);

    }
    return (
        < div className="container" >
            <ul id="scene">
                <li className="layer" data-depth=".1">
                    <img src={Textp} /></li>
                <li className="layer" data-depth="1">
                    <img src={Planet1} /></li>
                <li className="layer" data-depth="-1">
                    <img src={Planet2} /></li>
                <li className="layer" data-depth="2">
                    <img src={Astronaut} /></li>
                <li className="layer" data-depth="0.5">
                    <img src={Rocket} /></li>
            </ul>
        </div >
    );
}