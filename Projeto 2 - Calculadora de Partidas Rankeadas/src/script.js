function Jogador(qntVitoria, qntDerrota){
    let saldoRank = qntVitoria - qntDerrota
    return saldoRank
}
let ranking = Jogador(1000, 903)
let nivel = ""

if(ranking <= 10){
       nivel = "Ferro"
}else if(ranking >= 11 && ranking <= 20){
    nivel = "Bronze"
}else if(ranking >= 21 && ranking <= 50){
    nivel = "Prata"
}else if(ranking >= 51 && ranking <= 80){
    nivel = "Ouro"
}else if(ranking >= 81 && ranking <= 90){
     nivel = "Diamante"
}else if(ranking >= 91 && ranking <= 100){
    nivel = "Lendário"
}else{
    nivel = "Imortal"
}
console.log(`O Herói tem o saldo de ${ranking} está no nível de ${nivel}`)