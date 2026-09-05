import { Router } from 'express';
import { candidatos } from '../data/candidatos.js';

const candidatoViewRouter = Router();

candidatoViewRouter.get('/candidatos', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candidatos</title>
</head>
<body>
    <header>
        <h1>
            Lista de candidatos
        </h1>
    </header>
    <main>
        <section>
            <h2>
                Teste do servidor
                ${
                    candidatos.map(candidato => `<li>${candidato.nome} - ${candidato.numeroUrna} </li>`).join('')
                }
            </h2>
        </section>
    </main>
</body>
</html>
    `
  )
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