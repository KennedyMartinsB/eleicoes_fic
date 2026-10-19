import Candidato from '../model/Candidato.js'

export default CandidatoController = {
    create(req, res) {
        const { id, nome, origem, numeroUrna, foto } = req.body;
        const novoCandidato = new Candidato(id, nome, origem, numeroUrna, foto);

        return res.status(200).json({
            message: 'Candidato cadastrado com sucesso',
            candidato: novoCandidato
        })
    },

    delete(req, res) {
        const { id } = req.params;
        return res.status(200).json({
            message: 'candidato excluido com sucesso!!!'
        })
    }
}