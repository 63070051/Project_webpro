var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > 300) {
        document.getElementById("scrollup").classList.remove('hidden');
        document.getElementById("scrollup").classList.add('animate');
    } else {
        document.getElementById("scrollup").classList.add('hidden');
        document.getElementById("scrollup").classList.remove('animate');
    }
    prevScrollpos = currentScrollPos;
}
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
