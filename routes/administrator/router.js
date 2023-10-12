import express from 'express'
import {isAdmin} from '../../middleware/is.admin.js'
import obatRouterAdmin from './obat.router.js'
import userRouterAdmin from './user.router.js'

const adminRouter = express.Router();

adminRouter.use(isAdmin)

adminRouter.get('/', (req,res) => {
    res.status(200).send('API Administrator!')
})

adminRouter.use('/user',userRouterAdmin)
adminRouter.use('/data-obat',obatRouterAdmin)
// adminRouter.user('/jenis-obat',jenisObatRouterAdmin)

export {adminRouter}