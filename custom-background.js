//on load
let backgroundDiv = document.getElementsByClassName('background');

$(backgroundDiv).ready(function(){

  //check for cookie
  let bgUrl = window.getCookie('custom-background');

  // if found set background to cookie value
  if (bgUrl) {
      setBackground(bgUrl);
  }

  // create change background button
  var cb = document.createElement("Button");
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
  
});

function getCookie(name) {
	return document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')[2];
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=01/01/2030; path='/';`;
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
