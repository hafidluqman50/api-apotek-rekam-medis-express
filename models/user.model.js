import {Sequelize, Model, DataTypes} from 'sequelize'
import {sequelize} from '../config/config.js'

class User extends Model {
    // id;
    // username;
    // password;
    // level_user;
    // created_at;
    // updated_at;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    level_user: {
        type:DataTypes.INTEGER,
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
    modelName:'User',
    // tableName:'obat',
    // timestamps:false,
    paranoid:false,
    underscored:true,
    freezeTableName:true
})

export default User