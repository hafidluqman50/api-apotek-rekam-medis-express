import express from 'express'
import multer from 'multer'
import * as UserController from '../../controllers/user.controller.js'

const userRouterAdmin = express.Router();
const multParse       = multer();

userRouterAdmin.get('/',UserController.getUser)

userRouterAdmin.post('/create',multParse.none(),UserController.createUser)    

userRouterAdmin.get('/detail/:id',UserController.detailUser)

export default userRouterAdmin