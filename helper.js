var script = document.createElement('script');

script.type = 'text/javascript';

script.src = 'http://code.jquery.com/jquery-1.8.3.js';

document.head.appendChild(script);


function showAbout() {
    $('html, body').animate({scrollTop: 940},500);
    return false;
}

function up() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
}