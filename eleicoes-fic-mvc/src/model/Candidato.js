// Lista para simular database
const candidatosDB = [];

export default class Candidato {
    constructor(id, nome, origem, numeroUrna, foto){
        if(nome.length < 3){
            throw new Error("The name cannot have fewer than 3 characters.")
        }
        this.id = id;
        this.nome = nome;
        this.origem = origem;
        this.numeroUrna = numeroUrna;
        this.foto = foto;
    }

    static create(data) {
        const { nome, origem, numeroUrna, foto } = data;
        const newId = Candidato.candidatosDB.length + 1;

        const newCandidato = new Candidato(newId, nome, origem, numeroUrna, foto);
        Candidato.candidatosDB.push(newCandidato);
        return newCandidato;
    }

    static getCandidatos() {
        return Candidato.candidatosDB;
    }

    static getCandidatoById(id) {
        const candidatoFinded = Candidato.candidatosDB.find(c => c.id === Number(id));
        return candidatoFinded;
    }

    static deleteCandidatoById(id) {
        const idNum = Number(id);
        const index = Candidato.candidatosDB.some(c => c.id === idNum);

        if(index === -1){
            return null
        }

        Candidato.candidatosDB.splice(index, 1);
        return true;
    }

    static editCandidato(id, data) {
        const idNum = Number(id);
        const index = Candidato.candidatosDB.findIndex(c => c.id === idNum);

        if(index === -1){
            return null;
        }

        const { nome, origem, numeroUrna, foto } = data;
        Candidato.candidatosDB[index] = new Candidato(
            idNum,
            nome || Candidato.candidatosDB[index].nome,
            origem || Candidato.candidatosDB[index].origem,
            numeroUrna || Candidato.candidatosDB[index].numeroUrna,
            foto || Candidato.candidatosDB[index].foto,
        )
        return Candidato.candidatosDB[index];
    }
}