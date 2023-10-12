import User from '../models/user.model.js'

const getUser = async() => {
    return await User.findAll()
}

const createUser = async(request) => {
    return await User.create({
        username:request.username,
        password:request.password,
        level_user:request.level_user
    })
}

export {getUser, createUser}