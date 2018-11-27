//on load
let bgUrl = window.getCookie('custom-background');

if (bgUrl) {
    setBackground(bgUrl)
}

// Create Change background button
var cb = document.createElement("Button");
cb.innerHTML = "Change Background";
cb.style = "top:0;right:0;position:absolute;z-index: 9999"
document.body.appendChild(cb);

cb.onclick = function() {

    let bgUrl = window.prompt("Enter url of background image", "")

    if (!bgUrl) {return}
    
    window.setCookie('custom-background', bgUrl)
    setBackground(bgUrl)
};

function getCookie(name) {
	return document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')[2];
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=01/01/2030; path='/';`;	
}

function setBackground (url) {
    let backgroundDiv = document.getElementsByClassName('background')
    backgroundDiv[0].style.backgroundImage = `url('${url}')`
    console.log(`Background Changed to ${url}`)
}