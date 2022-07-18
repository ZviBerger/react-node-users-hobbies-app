import { Router } from 'express'
import HobbiesController from '../controllers/hobbiesController.js'

export default function hobbiesRouter() {
    const router = Router()
    const hobbiesController = new HobbiesController()

    router.get('/hobby/:userId', async (req, res) => {
        try {
            res.send({ data: await hobbiesController.findById(parseInt(req.params.userId), 'userId') })
        } catch (error) {
            console.log(error)
            res.send({ error: 'An error occurred during data fetching' })
        }
    })
    router.post('/hobby/:userId', async (req, res) => {
        try {
            let body = req.body
            console.log(body)
            let ok = await hobbiesController.createOrUpdate({userId: parseInt(req.params.userId)}, body)
            if (ok) return res.send({ message: 'Hobbies saved successfully' })
            res.send({ error: 'Some of the required parameters are missing' })
        } catch (error) {
            console.log(error)
            res.send({ error: 'An error occurred during creating' })
        }
    })

    return router
}