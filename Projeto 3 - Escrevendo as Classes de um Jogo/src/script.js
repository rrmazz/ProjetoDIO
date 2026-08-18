class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        if(this.tipo === "mago"){
            console.log(`${this.tipo} atacou usando magia`)
        }else if(this.tipo === "guerreiro"){
            console.log(`${this.tipo} atacou usando espada`)
        }else if(this.tipo === "monge"){
            console.log(`${this.tipo} atacou usando artes marciais`)
        }else if(this.tipo === "ninja"){
            console.log(`${this.tipo} atacou usando shuriken`)
        }
    }
}

let heroi1 = new Heroi ("Patolino", 101, "mago")
let heroi2 = new Heroi ("Hercules", 200, "guerreiro")
let heroi3 = new Heroi ("Bruce Lee", 55, "monge")
let heroi4 = new Heroi ("Jiraia", 33, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
