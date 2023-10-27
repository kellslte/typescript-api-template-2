import express from "express"
import { createServer} from "http"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import { ErrorMiddleware } from "../app/middleware/error.middleware"
import { appRouter } from "../routes/api.routes"
 
const app = express()
// middleware
app.use(cors({
    credentials: true
}))
app.use(compression())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// routes
app.use('/api/v1', appRouter);
// error handler
app.use(ErrorMiddleware);

const server = createServer(app);

export { app, server };