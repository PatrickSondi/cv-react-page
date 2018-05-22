import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var slides = document.querySelectorAll('.slide');
var current = 0;
var next = 1;
var max = slides.length - 1;
slides[current].classList.add('current');
slides[next].classList.add('next');

setInterval(function() {
    slides[current].classList.add('mask');

    setTimeout(function() {
        slides[current].classList.remove('mask', 'current');
        slides[next].classList.add('current');
        slides[next].classList.remove('next');
        current = next;
        
        if ( next < max ) {
            next++;
        } else {
            next = 0;
        }
        slides[next].classList.add('next');
    }, 1000); // 1000 = transition time
}, 3000); // 3000 = active slide time