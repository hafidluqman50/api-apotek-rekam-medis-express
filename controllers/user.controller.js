import User from '../models/user.model.js'

const getUser = (req,res) => {
    User.findAll()
    .then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data User',response:result})
    })
    .catch((error) => {
        res.status(400).send({status:true,message:'Error',response:error})
    })
}

const createUser = (req,res) => {
    User.create({
        username:req.body.username,
        password:req.body.password,
        level_user:req.body.level_user
    })
    .then((result) => {
        res.status(200).send({status:true,message:'Berhasil Insert User',response:req.body})
    })
    .catch((error) => {
        res.status(400).send({status:true,message:'Error!',response:error})
    })
}

const detailUser = (req,res) => {
    User.findByPk(req.params.id)
    .then((result) => {
        res.status(200).send({status:true,message:'Berhasil Get Data User Detail!',response:result})
    })
    .catch((error) => {
        res.status(400).send({status:true,message:'Error!',response:error})
    })
}

export {getUser, createUser, detailUser}