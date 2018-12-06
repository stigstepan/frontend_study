var script = document.createElement('script');

script.type = 'text/javascript';

script.src = 'http://code.jquery.com/jquery-1.8.3.js';

document.head.appendChild(script);


function showAbout() {
    $('html, body').animate({
        scrollTop: document.documentElement.clientHeight
    }, 500);
    return false;
}

function up() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
}

window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top < document.documentElement.clientHeight) {
        document.getElementById('menu-id').style.backgroundColor = '';
    } else {
        document.getElementById('menu-id').style.backgroundColor = 'white';
    }

}