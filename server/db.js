const mongoose = require('mongoose')
const connectDb = async() =>{
    try{

       await mongoose.connect('mongodb+srv://harshdev2909:harsh9560@cluster0.gkf5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
       console.log('connected to Database')
    }
    catch(err) {
        console.log(err)
    }
}
module.exports = connectDb