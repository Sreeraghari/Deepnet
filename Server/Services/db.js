const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/Information",{
    useNewUrlParser:true
})


const Data=mongoose.model('Data',{
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
        
    },
    place:{
        type:String,
        required:true
    },
})
module.exports={
    Data
}
