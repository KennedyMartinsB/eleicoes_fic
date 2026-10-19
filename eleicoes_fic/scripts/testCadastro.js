import { Eleicao } from "../src/dominio/Eleicao.js";

const eleicao = new Eleicao()

eleicao.cadastrar("Kennedy", 67)
eleicao.cadastrar("Jeremias", 68)
eleicao.cadastrar("Rivaldo Jesus", 69)

console.log(eleicao.listarCandidatos())

eleicao.votar(67)
eleicao.votar(67)
eleicao.votar(67)
eleicao.votar(66)
eleicao.votar(66)
eleicao.votar(67)
eleicao.votar(69)

console.log("Votos apurados: ", eleicao.apurarVotos())