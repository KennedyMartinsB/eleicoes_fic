import express from 'express'
import candidatoRouter from './src/routes/candidatoRouter.js'
import candidatoViewRouter from './src/routes/candidatoViewRouter.js'

const app = express()

app.use(express.json())

// Registro de rota
app.use('/api', candidatoRouter)
app.use('/',candidatoViewRouter)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})