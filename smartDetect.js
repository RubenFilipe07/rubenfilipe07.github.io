var url = window.location.href

if(url == "https://rubenfilipe07.github.io/" && screen.width <=620){
document.getElementById("Css").href = "mobile.css";
}

if(screen.width <=620 && url!="https://rubenfilipe07.github.io/"){
 alert("Esta página não foi otimizada para dispositivos móveis."+"\n"+"Clique em OK para continuar")   
}