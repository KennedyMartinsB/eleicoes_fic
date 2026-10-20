import express from 'express'
import publicRoutes from './src/routes/PublicRoutes.js';
import candidatoRouter from './src/routes/CandidatosRoutes.js';

const app = express();

app.use('/', publicRoutes)
app.use('/candidatos', candidatoRouter)

export default app;