function off(){
    var css = 'html {-webkit-filter: invert(0%);!important} img {-webkit-filter: invert(0%);!important}',
        head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    style.setAttribute('id', 'gcff-night-mode');
    head.replaceChild(style, document.getElementById('gcff-night-mode'));
    $('.gcff-night-mode-marked').removeClass('gcff-night-mode-marked');
    $('.gcff-night-mode-checked').removeClass('gcff-night-mode-checked');
    window.observer.disconnect();
}