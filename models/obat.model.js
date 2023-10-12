import {Sequelize, Model, DataTypes} from 'sequelize'
import {sequelize} from '../config/config.js'

class Obat extends Model {
    // id;
    // nama_obat;
    // jenis_obat;
    // stok_obat;
    // created_at;
    // updated_at;
}

Obat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nama_obat: {
        type:DataTypes.STRING,
        allowNull:false
    },
    jenis_obat: {
        type:DataTypes.STRING,
        allowNull:false
    },
    stok_obat: {
        type:DataTypes.STRING,
        allowNull:false
    },
    created_at: {
        type:DataTypes.DATE,
        allowNull:true
    },
    updated_at: {
        type:DataTypes.DATE,
        allowNull:true
    },
},{sequelize,
    modelName:'Obat',
    tableName:'obat',
    // timestamps:false,
    paranoid:false,
    underscored:true,
    freezeTableName:true
})

export default Obat