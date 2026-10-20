import Candidato from '../model/Candidato.js'

const CandidatoController = {
    create(req, res) {
        const { id, nome, origem, numeroUrna, foto } = req.body;
        const novoCandidato = new Candidato(id, nome, origem, numeroUrna, foto);

        return res.status(200).json({
            message: 'Candidato successfully registered',
            candidato: novoCandidato
        })
    },

    delete(req, res) { 
        const deleted = Candidato.deleteCandidatoById(req.params.id)
        if(!deleted) {
            return res.status(404).json({
                message: 'Candidato not found.'
            });
        }
        return res.status(200).json({
            message: 'Candidato deleted.'
        });
    },

    getCandidatoById(req, res) {
        const candidato = Candidato.getCandidatoById(req.params.id);
        if(!candidato) {
            return res.status(404).json({
                message: 'Candidato not found.'
            });
        }
        return res.status(200).json({
            message: 'Candidato found',
            candidato: candidato
        })
    },

    getCandidatos(req, res) {
        const candidatos = Candidato.getCandidatos();
        return res.status(200).json(candidatos)
    },
}

export default CandidatoController;