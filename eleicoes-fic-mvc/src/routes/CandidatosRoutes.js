import { Router } from "express";
import CandidatoController from "../controller/CandidatoController.js";

const routes = Router();

routes.post('/candidatos', CandidatoController.create);
routes.delete('/candidatos/:id', CandidatoController.delete);
routes.get('/candidato/:id', CandidatoController.getCandidatoById);
routes.get('/candidatos/', CandidatoController.getCandidatos);
// routes.put("/candidatos/:id", CandidatoController.alterar);

export default routes;