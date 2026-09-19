import { Router } from 'express'
import { Eleicao } from '../dominio/Eleicao.js'
import { exigirLogin } from '../middlewares/exigirLogin'

const painelRouter = Router()


painelRouter.get('/', exigirLogin, (req, res) => {
    const eleicao = new Eleicao()
    res.render('painel', { titulo: 'Painel Administrativo', usuarop: req.session.usuarioLogado, relatorio: Eleicao.apurarVotos() })
})

painelRouter.post('/cand-candidato', exigirLogin, (req, res) => {
    const { nome, numero } = req.body
    const eleicao = new Eleicao()

    try{
        eleicao.cadastrar(nome, numero)
    }catch(e){
        console.error(e)
    }
    res.redirect('/painel')
})

function soma(){}

export { painel, soma }