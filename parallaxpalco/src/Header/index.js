import React from 'react';
import './style.css';

import Textp from '../img/text.png';
import Smoke1 from '../img/smoke1.png';
import Planet2 from '../img/planet2.png';
import Holo from '../img/holof.png';
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
                    <h1>Academia </h1></li>
                <li className="layer" data-depth="1">
                    <img src={Smoke1} /></li>
                <li className="layer" data-depth="-1">
                    <img src={Holo} /></li>
                <li className="layer" data-depth="3">
                    <img src={Smoke1} /></li>
                <li className="layer" data-depth="0.5">
                    <img src={Rocket} /></li>
            </ul>
        </div >
    );
}