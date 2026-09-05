import express from 'express'
import candidatoRouter from './src/routes/candidatoRouter.js'

const app = express()


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})