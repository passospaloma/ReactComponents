import React from 'react';
import './style.css';
import Smoke from '../video/smoke.mp4';
export default function Header() {
    return (
        <section>
            <video src={Smoke} autoPlay muted></video>
            <h1>
                <span>A</span>
                <span>C</span>
                <span>A</span>
                <span>D</span>
                <span>E</span>
                <span>M</span>
                <span>I</span>
                <span>A</span>
                <span> </span>
                <span>D</span>
                <span>E</span>
                <span> </span>
                <span>D</span>
                <span>A</span>
                <span>N</span>
                <span>Ç</span>
                <span>A</span>
                <span> </span>
                <span>M</span>
                <span>A</span>
                <span>R</span>
                <span>Y</span>
                <span> </span>
                <span>P</span>
                <span>A</span>
                <span>S</span>
                <span>S</span>
                <span>O</span>
                <span>S</span>
                <h5 class="animate__animated animate__fadeInLeft">RUA ROBERTO SILVEIRA 29, sala 235</h5>
                <h6 class="animate__animated animate__fadeInRight">Icaraí - Niterói - Rio de Janeiro</h6>

            </h1>

        </section>
    )
}