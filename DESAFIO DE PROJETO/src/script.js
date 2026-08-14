let xpHeroi = ["Mario", 2005]
let nivel = ""

if(xpHeroi[1] <= 1000){
    nivel = "Ferro"
}
else if(xpHeroi[1] >= 1001 && xpHeroi[1] <= 2000){
    nivel = "Bronze"
}
else if(xpHeroi[1] >= 2001 && xpHeroi[1] <= 5000){
    nivel = "Prata"
}
else if(xpHeroi[1] >= 5001 && xpHeroi[1] <= 7000){
    nivel = "Ouro"
}
else if(xpHeroi[1] >= 7001 && xpHeroi[1] <= 8000){
    nivel = "Platina"
}
else if(xpHeroi[1] >= 8001 && xpHeroi[1] <= 9000){
    nivel = "Ascendente"
}
else if(xpHeroi[1] >= 9001 && xpHeroi[1] <= 10000){
    nivel = "Imortal"
}
else{
    nivel = "Radiante"
}
console.log("O Herói de nome " + xpHeroi[0] + " está no nível de " + nivel)