const User = require('../models/User')

exports.register = (req, res)=>{
    console.log(req.body)
    let user = new User(req.body)
    user.register().then(()=>{
        res.send("registered successfully!!!")
    }).catch(err =>{
        console.log(err)
        res.send("error!!!")
    })
}