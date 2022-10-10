import React from 'react';
import './style.css';
import Swiper from 'swiper'
import F1 from '../Img/f1.jpg';
import F2 from '../Img/f2.jpg';
import F3 from '../Img/f3.jpg';
import F4 from '../Img/f4.jpg';
import F5 from '../Img/f5.jpg';
import F6 from '../Img/f6.jpg';
import F7 from '../Img/f7.jpg';
import F8 from '../Img/f8.jpg';
import F9 from '../Img/f9.jpg';
import F10 from '../Img/f10.jpg';
import F11 from '../Img/f11.jpg';
import F12 from '../Img/f12.jpg';
import $ from 'jquery';


export default function Header() {

  $(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    })
  })

  return (
    <div className="container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F1 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F2 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F3 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F4 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F5 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F6 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F7 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F8 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F9 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F10 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F11 + ")" }}></div>
          <div className="swiper-slide" style={{ backgroundImage: "url(" + F12 + ")" }}></div>

        

      </div>
      <div class="swiper-pagination"></div>
    </div>
    </div>
  );
}

