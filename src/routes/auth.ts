import express from 'express'
import { IUser, Users } from '../models/users'

export const authRouter: express.Router = express.Router()

authRouter.post(
  '/register',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const user = req.body.user
    const email = req.body.email
    const password = req.body.password

    if (!user || !email || !password) {
      res.status(404)
      res.json({ result: `Wrong request. Can't parse user and password from payload` })
    } else {
      const foundUsers: Array<IUser> = await Users.find({ username: user })
      if (foundUsers.length === 0) {
        Users.insertMany({
          username: user,
          email: email,
          password: password,
          image: req.body.image,
        })
        res.status(200)
        res.json({ result: 'User was registered' })
      } else {
        res.status(403)
        res.json({ result: 'Such username is already taken' })
      }
    }
  },
)

authRouter.post(
  '/login',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const user = req.body.user
    const password = req.body.password

    if (user === undefined || password === undefined) {
      res.status(404)
      res.json({ result: `Wrong request. Can't parse user and password from payload` })
    } else {
      const foundUsers: Array<IUser> = await Users.find({
        username: user,
        password: password,
      })
      if (foundUsers.length === 0) {
        res.status(403)
        res.json({ result: 'Wrong username or password' })
      } else {
        res.status(200)
        res.json({ image: foundUsers[0].image })
      }
    }
  },
)
