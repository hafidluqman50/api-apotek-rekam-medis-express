import express, {json} from 'express'
import {authRouter} from './routes/auth.router.js'
import {guestRouter} from './routes/guest/router.js'
import {adminRouter} from './routes/administrator/router.js'

const app = express()

app.use(json())
app.use('/auth',authRouter)
app.use('/api/',guestRouter)
app.use('/api/administrator',adminRouter)

app.listen(3000,() => {
    console.log(`Listening to http://localhost:${3000}`)
})
