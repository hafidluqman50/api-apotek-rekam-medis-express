import Obat from '../models/obat.model.js'

const getObat = (req,res) => {
    Obat.findAll()
    .then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data Obat',response:result})
    })
    .catch((error) => {
        res.status(400).send({status:false,message:'Error',response:error.message})
    })
}

const createObat = (req,res) => {
    Obat.create({
        nama_obat:req.body.nama_obat,
        jenis_obat:req.body.jenis_obat,
        stok_obat:req.body.stok_obat,
    })
    .then((result) => {
        res.status(200).send({status:true,message:'Berhasil Insert Obat',response:req.body})
    })
    .catch((error) => {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
}

const detailObat = (req,res) => {
    Obat.findByPk(req.params.id)
    .then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data Obat Detail!',response:result})
    })
    .catch((error) => {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
}

const updateObat = (req,res) => {
    Obat.update({
        nama_obat:req.body.nama_obat,
        jenis_obat:req.body.jenis_obat,
        stok_obat:req.body.stok_obat,
    },{where:{
        id:req.params.id
    }})
    .then((result) => {
        res.status(200).send({status:true, message:'Berhasil Update Obat!', response:result})
    })
    .catch((error) => {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
}

const deleteObat = (req,res) => {
    Obat.destroy({
        where:{
            id:req.params.id
        }
    })
    .then((result) => {
        res.status(200).send({status:true, message:'Berhasil Delete Obat!', response:result})
    })
    .catch((result)=> {
        res.status(400).send({status:false,message:'Error!',response:error})
    })
}

export {getObat,createObat,detailObat,updateObat,deleteObat}