//on load
let backgroundDiv = document.getElementsByClassName('background');

//check for cookie
let bgUrl = window.getCookie('custom-background') ;

// if found set background to cookie value
if (bgUrl) {
    setBackground(bgUrl);
}

// create change background button
let cb = document.createElement("Button");
cb.innerHTML = "Change Background";
cb.style = "top:0;right:0;position:absolute;z-index: 9999";
document.body.appendChild(cb);

cb.onclick = function() {

    let bgUrl = window.prompt("Enter url of background image", "");

    if (!bgUrl) return;
    if (!isValidUrl(bgUrl)) return alert("Not a valid url");

    console.log("Url was valid setting cookie and changing background");
    window.setCookie('custom-background', bgUrl);
    setBackground(bgUrl);

};

function getCookie(name) {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    if (!value) return;
    return value[2]
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Wed, 1 Jan 2020 20:47:11 UTC; path='/';`;
}

function setBackground (url) {
    backgroundDiv[0].style.backgroundImage = `url('${url}')`;
    console.log(`Background Changed to ${url}`);
}

function isValidUrl (url) {

    let isUrlReg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.exec(url);

    if (!isUrlReg) {
        return false
    }

    return true

}
