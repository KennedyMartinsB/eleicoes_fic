import { Router } from "express";
import CandidatoController from "../controller/CandidatoController";

const routes = Router();

routes.post('/candidatos', CandidatoController.create);
routes.delete('/candidatos/:id', CandidatoController.delete);