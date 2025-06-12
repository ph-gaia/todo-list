import { Hono } from 'hono'
import { UserController } from '../controllers/user.controller'

const userRouter = new Hono()
const controller = new UserController()

userRouter.post('/', (c) => controller.createUser(c))

export { userRouter }
