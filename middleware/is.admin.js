let isAdmin = (req, res, next) => {
    if (req.headers['Authorization'] == '') {
        res.status(400).json({status:false,message:'Unauthorized'})
    }
    else {
        next()
    }
}

export {isAdmin}