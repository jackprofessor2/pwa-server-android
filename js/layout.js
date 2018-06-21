/** layout.js */
var PWA = PWA || {};

PWA.Layout = (function() {

    /** constructor */
    Layout = function() {
        menu = document.getElementById('menu-float');
        btnMenu = document.getElementById('btn-menu');
        btnStartServer = document.getElementById('start-server');
        btnClose = document.getElementById('close');

        /** default */
        menu.style.display = 'none';
    }

    /** prototype */
    Layout.prototype.start = function() {
        btnMenu.addEventListener('click', onActiveClose);
        btnStartServer.addEventListener('click', onStartServer);
        btnClose.addEventListener('click', onClose);
    }

    /** On close menu */
    onActiveClose = function(e) {
        menu.style.display = (menu.style.display == 'none') ? 'block' : 'none';
    }

    /** server start */
    onStartServer = function(e) {
        menu.style.display = 'none';
    }

    /** application close */
    onClose = function(e) {
        menu.style.display = 'none';
    }

    return Layout;

}());

/** document loaded */
document.addEventListener('DOMContentLoaded', function() {
    let pwa = new PWA.Layout();
    pwa.start();
});