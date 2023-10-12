import express from 'express'
import multer from 'multer'
import * as UserController from '../../controllers/user.controller.js'

const userRouterAdmin = express.Router();
const multParse       = multer();

userRouterAdmin.get('/',(req,res) => {
    UserController.getUser().then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data User',response:result})
    }).catch((error) => {
        res.status(400).send({status:true,message:'Error',response:error})
    })
})

userRouterAdmin.post('/create',multParse.none(),(req,res) => {
    UserController.createUser(req.body).then((result) => {
        res.status(200).send({status:true,message:'Berhasil Insert User',response:req.body})
    }).catch((error) => {
        res.status(400).send({status:true,message:'Error!',response:error})
    })
})    

userRouterAdmin.get('/detail/:id',(req,res) => {
    UserController.detailUser(req.params.id).then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data User Detail!',response:result})
    }).catch((error) => {
        res.status(400).send({status:true,message:'Error!',response:error})
    })
})

export default userRouterAdmin