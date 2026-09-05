import { Router } from 'express';
import { candidatos } from '../data/candidatos.js';

const candidatoRouter = Router();

candidatoRouter.get('/candidatos', (req, res) => {
  res.json(candidatos)
})

candidatoRouter.get('/candidatos/:id', (req, res) => {
    // capturando parametros da url da requisição
    const numero = parseInt(req.params.id)
    const candidato = candidatos.find(c => c.numeroUrna === numero)
    if(candidato){
        res.status(200).json(candidato)
    } else{
        res.status(404).json({error: 'Candidato não encontrado'})
    }
})

// candidatoRouter.delete('/candidatos/:id', (req, res) => {
//     const id = parseInt(req.params.id)
    
//     // Verificando se candidato existe
//     const cand = candidatos.find(c => c.id === id);

//     if(!cand){
//         return res.status(404).json({ error: 'Candidato não encontrado' });
//     }

//     candidatos = candidatos.filter(c => c.id !== id);

//     // 3. Retorna resposta de sucesso
//     res.status(200).json({ 
//         message: 'Candidato removido com sucesso',
//         candidatosAtualizados: candidatos 
//     });
// })

export default candidatoRouter;