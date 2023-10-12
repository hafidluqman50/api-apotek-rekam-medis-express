import Obat from '../models/obat.model.js'

const getObat = async() => {
    return await Obat.findAll()
}

const createObat = async(request) => {
    return await Obat.create({
        nama_obat:request.nama_obat,
        jenis_obat:request.jenis_obat,
        stok_obat:request.stok_obat,
    })
}

const detailObat = async(id) => {
    return await Obat.findByPk(id)
}

const updateObat = async(id,request) => {
    return await Obat.update({
        nama_obat:request.nama_obat,
        jenis_obat:request.jenis_obat,
        stok_obat:request.stok_obat,
    },{where:{
        id
    }})
}

const deleteObat = async(id) => {
    return await Obat.destroy({
        where:{
            id
        }
    })
}

export {getObat,createObat,detailObat,updateObat,deleteObat}