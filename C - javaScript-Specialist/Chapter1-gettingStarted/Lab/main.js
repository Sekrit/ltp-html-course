window.onload = function () {
document.getElementById('consoleButton').addEventListener('click', firstResponse);
    
document.getElementById('browserButton').addEventListener('click', secondResponse);
    
};

function firstResponse(e) {
console.log("thanks for clicking the console button!")
}
function secondResponse(e) {
document.write("Thanks for clicking the browser button!")
}