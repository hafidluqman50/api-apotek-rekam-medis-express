import express from 'express'
import multer from 'multer'
import * as ObatController from '../../controllers/obat.controller.js'

const obatRouterAdmin = express.Router();
const multParse       = multer();

obatRouterAdmin.get('/',(req,res) => {
    // console.log(ObatController.getObat())
    ObatController.getObat().then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data Obat',response:result})
    }).catch((error) => {
        res.status(400).send({status:false,message:'Error',response:error.message})
    })
})

obatRouterAdmin.post('/create',multParse.none(),(req,res) => {
    ObatController.createObat(req.body).then((result) => {
        res.status(200).send({status:true,message:'Berhasil Insert Obat',response:req.body})
    }).catch((error) => {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
})    

obatRouterAdmin.get('/detail/:id',(req,res) => {
    ObatController.detailObat(req.params.id).then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data Obat Detail!',response:result})
    }).catch((error) => {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
})

obatRouterAdmin.put('/update/:id',(req,res) => {
    ObatController.updateObat(req.params.id,req.body).then((result) => {
        res.status(200).send({status:true, message:'Berhasil Update Obat!', response:result})
    }).catch((error) => {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
})

obatRouterAdmin.delete('/delete/:id',(req,res) => {
    ObatController.deleteObat(req.params.id).then((result) => {
        res.status(200).send({status:true, message:'Berhasil Delete Obat!', response:result})
    }).catch((error) => {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
})

export default obatRouterAdmin