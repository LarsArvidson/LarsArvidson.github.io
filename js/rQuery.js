let param = new URLSearchParams(window.location.search);
let paramUrl1 = param.get("url1");
let paramUrl2 = param.get("url2");



let url1 = document.getElementById("url1");
url1.src = paramUrl1;

let url2 = document.getElementById("url2");
url2.src = paramUrl2;