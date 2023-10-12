import express from 'express'
import multer from 'multer'
import * as AuthController from '../controllers/auth.controller.js'

const authRouter = express.Router();
const multParse  = multer();

authRouter.get('/logout',AuthController.logout)
authRouter.post('/login',multParse.none(),AuthController.login)

export {authRouter}