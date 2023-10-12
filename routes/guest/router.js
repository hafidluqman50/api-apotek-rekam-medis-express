// import {router} from './router.js'
import express from 'express'
const guestRouter = express.Router()

// let guestRouter = router

guestRouter.get('/',(req,res) => {
    res.status(200).json({message:'Ini API Apotek'})
})

export {guestRouter}