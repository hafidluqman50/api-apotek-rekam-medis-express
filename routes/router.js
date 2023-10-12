import express from 'express'
const baseRouter = express.Router()

// const router = express.Router()
baseRouter.get('/',(req,res) => {
    res.status(200).send({message:'API Apotek Rekam Medis'})
})
// export {router}

export {baseRouter}