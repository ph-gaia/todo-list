import { Hono } from 'hono'
import { userRouter } from './interfaces/routes/user.route'

const app = new Hono()

app.route('/users', userRouter)

export default app
