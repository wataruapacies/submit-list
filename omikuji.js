let username;
let userresult;
username = prompt("‚¨–¼‘O‚ğ‹³‚¦‚Ä‰º‚³‚¢B");
if (username==""){
      username="–¼–³‚µ";
}
document.getElementById("name").innerHTML = username;



let rand = Math.floor( Math.random() * 5) ;

if (rand == 0) {
      userresult = "‘å‹g";
    }
    if (rand == 1) {
      userresult = "’†‹g";
    }
    if (rand == 2) {
      userresult = "¬‹g";
    }
    if (rand == 3) {
      userresult = "‹g";
    }
    if (rand == 4) {
      userresult = "‹¥";
    }
    document.getElementById("result").innerHTML = userresult;