var url = window.location.href
var inicial  = "https://rubenfilipe07.github.io/"
var xilofone = "https://rubenfilipe07.github.io/Xilofone/index.html"
var mobile = false

if(screen.width <=620){
mobile = true; 
}

if(url == inicial && mobile==true){
document.getElementById("css").href = "mobile.css"
}

if(url!=inicial && url!=xilofone && mobile==true){
 alert("Esta página não foi otimizada para dispositivos móveis."+"\n"+"Clique em OK para continuar")   
}