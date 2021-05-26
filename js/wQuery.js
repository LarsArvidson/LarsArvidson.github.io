document.getElementById("submitbtn").addEventListener("click", generateUrl);

function generateUrl() {

    let url1 = document.getElementById("url1").value;
    let url2 = document.getElementById("url2").value;

    //var query = Math.random().toString().substr(2, 8);;

    var url = "https://localhost:44308/live?url1=" + url1 + "&url2=" + url2;

console.log(url1);
console.log(url2);
console.log(url);

window.location.href = url;
}