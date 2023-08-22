const header = document.querySelector('header');
const text = document.querySelector('.text');
const headerheight = header.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding",
    headerheight + "px"
);



window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 50) {
        header.classList.add('sticky');
        //  document.querySelector('a').style.color='#fff';
        text.innerHTML="WebSite Name"
    }
    else {
        header.classList.remove('sticky');
        text.innerHTML="Welcome to my Personal website"
    }
}
