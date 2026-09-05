import { Router } from 'express';
import { candidatos } from '../data/candidatos.js';

const candidatoViewRouter = Router();

candidatoViewRouter.get('/candidatos', (req, res) => {
  res.render('home', { titulo: 'Lista de Candidatos', candidatos })
})

candidatoViewRouter.get('/candidatos/:id', (req, res) => {
    // capturando parametros da url da requisição
    const numero = parseInt(req.params.id)
    const candidato = candidatos.find(c => c.numeroUrna === numero)
    if(candidato){
        res.status(200).json(candidato)
    } else{
        res.status(404).json({error: 'Candidato não encontrado'})
    }
})

export default candidatoViewRouter;