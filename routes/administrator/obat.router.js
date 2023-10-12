import express from 'express'
import multer from 'multer'
import * as ObatController from '../../controllers/obat.controller.js'

const obatRouterAdmin = express.Router();
const multParse       = multer();

obatRouterAdmin.get('/',ObatController.getObat)

obatRouterAdmin.post('/create',multParse.none(),ObatController.createObat)    

obatRouterAdmin.get('/detail/:id',ObatController.detailObat)

obatRouterAdmin.put('/update/:id',ObatController.updateObat)

obatRouterAdmin.delete('/delete/:id',ObatController.deleteObat)

export default obatRouterAdmin