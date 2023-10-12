import User from '../models/user.model.js'

const login = (req,res) => {
    res.status(200).send({status:true,message:'Test POST Login',response:req.body})
}

const logout = (req,res) => {
    res.status(200).send({status:true,message:'Berhasil Logout'})
}

export {login,logout}