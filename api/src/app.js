import express from "express";
import plantsRoutes from "./routes/plants.js"

const app = express()

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    next()
})

app.use(plantsRoutes)

app.listen(3005)
console.log('Server running on port 3005');