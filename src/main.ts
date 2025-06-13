import { Hono } from 'hono'
import { userRouter } from './interfaces/routes/user.route'
import { taskRoutes } from './interfaces/routes/task.routes'

const app = new Hono()

app.route('/users', userRouter)
app.route("/tasks", taskRoutes)

export default app
