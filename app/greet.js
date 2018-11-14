var config = require("./config.json");
module.exports = function(){
    var greet = document.createElement("div");
    greet.textContent = config.greetContent;
    return greet;
}