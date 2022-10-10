import React from 'react';
import './style.css';
import $ from 'jquery';
import Face from '../Img/face.png';

export default function Navbar() {
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
  })
  return (
    <nav>
      <div className="brandName">
        <img src="" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Fotos</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Academia</a></li>
        <li><a href="#">Localização</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="https://www.facebook.com/marypassos.com.br"><img src={Face} width="25px" height="22px" /></a></li>
      </ul>
    </nav>
  );
}