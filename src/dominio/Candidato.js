export class  Candidato {
    constructor(id, nome, numero){
        if(nome.length < 3) {
            throw new Error("O nome não pode ter menos que 3 caracteres.")
        }
        this.id = id
        this.nome = nome
        this.numero = numero
    }
}

/**
    Variáveis fora de classe
    const nome = "rick"
    let idade = 20

    Variáveis dentro de classe
    this.nome = "rick"
    this.idade = 20

 */