import { Router } from "express";

const publicRouter = Router()

publicRouter.get('/', (req, res) => {
    res.send('Server MVC is running!!!');
})

export default publicRouter