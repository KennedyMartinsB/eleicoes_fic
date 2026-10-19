import { Candidato } from "./Candidato.js";

export class Eleicao {
    constructor() {
        this.candidatos = []
        this.votos = []
    }
    // metodo de adicionar candidato
    cadastrar(nome, numero) {
        let numeroUrna = Number(numero)
        const candidatoExiste = this.candidatos.find((candidato => candidato.numero === candidato.numeroUrna))
        if(candidatoExiste) {
            throw new Error("Candidato já existe!!!")
        }
        const id = this.candidatos.length + 1
        const candidato = new Candidato(id, nome, numeroUrna)
        this.candidatos.push(candidato)
        return candidato
    }

    listarCandidatos() {
        return this.candidatos
    }

    votar(numeroUrna) {
        this.votos.push({numeroUrna})
    }

    apurarVotos() {
        return this.candidatos.map((candidato) => {
            const recebidos = this.votos.filter((voto) => voto.numeroUrna === candidato.numero)
            return { 
                id: candidato.id, 
                nome: candidato.nome, 
                numero: candidato.numero, 
                votos: recebidos.length 
            }
        })
    }

}



/*
    FUnção fora de classe é função mas função dentro de classe é método
*/