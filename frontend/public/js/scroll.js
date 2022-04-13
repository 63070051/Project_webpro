var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    console.log(prevScrollpos);
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