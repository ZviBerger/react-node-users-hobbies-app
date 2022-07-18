import { Router } from 'express'
import UsersController from '../controllers/usersController.js'

export default function usersRouter() {
    const router = Router()
    const usersController = new UsersController()

    router.get('/user/with-hobbies', async (req, res) => {
        try {
            res.send({ data: await usersController.findAllWithHobbies() })
        } catch (error) {
            console.log(error)
            res.send({ error: 'An error occurred during data fetching' })
        }
    })
    router.get('/user', async (req, res) => {
        try {
            res.send({ data: await usersController.findAll() })
        } catch (error) {
            console.log(error)
            res.send({ error: 'An error occurred during data fetching' })
        }
    })
    router.delete('/user/:id', async (req, res) => {
        try {
            res.send({ data: await usersController.deleteById(parseInt(req.params.id)) })
        } catch (error) {
            console.log(error)
            res.send({ error: 'An error occurred during data fetching' })
        }
    })
    router.post('/user', async (req, res) => {
        try {
            let body = req.body
            console.log(body)
            let ok = await usersController.create(body)
            if (ok) return res.send({ message: 'User created successfully' })
            res.send({ error: 'Some of the required parameters are missing' })
        } catch (error) {
            console.log(error)
            res.send({ error: 'An error occurred during creating' })
        }
    })

    return router
}