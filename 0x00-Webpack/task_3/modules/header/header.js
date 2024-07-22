import $ from 'jquery';
import '../header/header.css';
import Logo from '../assets/holberton-logo.jpg';

console.log('Init header');

$(document).ready(function() {
    $('header').append('<div id="logo"></div>');
    $('header').append('<h1>Holberton Dashboard</h1>');

    $('#logo').css({
        'background-image': `url(${Logo})`,
        'background-size': 'cover',
        'width': '200px',
        'height': '200px'
    });
});

