import { Router } from 'express';
import { candidatos } from '../data/candidatos.js';

const candidatoRouter = Router();

candidatoRouter.get('/candidatos', (req, res) => {
  res.json(candidatos)
})

candidatoRouter.get('/candidato/:id', (req, res) => {
    // capturando parametros da url da requisição
    const numero = parseInt(req.params.id)
    const candidato = candidatos.find(c => c.id === numero)
    if(candidato){
        res.status(200).json(candidato)
    } else {
        res.status(404).json({error: 'Candidato não encontrado!!!'})
    }
})

candidatoRouter.delete('/candidato/delete/:id', (req, res) => {
    const candidatoId = parseInt(req.params.id)
    const index = candidatos.findIndex(c => c.id === candidatoId)
    if(index !== -1){
        const candidatoDeletado = candidatos.splice(index, 1)
        return res.status(200).json({message: 'Candidato Removido Com Sucesso!!!', candidato: candidatoDeletado[0]})
    } else {
        return res.status(404).json({error: 'Candidato não encontrado.'})
    }
})

candidatoRouter.patch('/candidato/:id', (req, res) => {
    const candidatoId = parseInt(req.params.id)
    const candidato = candidatos.find(c => c.id === candidatoId)

    if(candidato){
        Object.assign(candidato, req.body)
        return res.status(200).json({message: 'Candidato atualizado com sucesso!!!', candidato: candidato})
    } else {
        return res.status(404).json({error: 'Candidato não existente.'})
    }
})

export default candidatoRouter;