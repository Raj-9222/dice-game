var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage="dice"+ randomnumber1 +".png";
var randomsource="images/"+ randomimage;
document.querySelectorAll("img")[0].setAttribute("src",randomsource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+ randomnumber2 +".png";
var randomsource1="images/"+ randomimage1 ;
document.querySelectorAll("img")[1].setAttribute("src",randomsource1);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=("🎉player1 wins");
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML=("player2 wins🎉");
}
else{
    document.querySelector("h1").innerHTML=("🎉Draw🎉") ;
}