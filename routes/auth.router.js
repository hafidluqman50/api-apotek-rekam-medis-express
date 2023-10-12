import express from 'express'
import multer from 'multer'
import * as AuthController from '../controllers/auth.controller.js'

const authRouter = express.Router();
const multParse  = multer();

authRouter.post('/login',multParse.none(),(req,res) => {
    AuthController.login(req.body).then((result) => {
        res.status(200).send({status:false,message:'Berhasil Login!',response:result})
    }).catch((error) => {
        res.status(500).send({status:false,message:'Error!',response:error})
    })
})

authRouter.get('/logout',(req,res) => {

})

export {authRouter}