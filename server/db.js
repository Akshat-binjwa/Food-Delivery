const mongoose = require('mongoose');
mongoose.set("strictQuery",true);
const mongoURL = 'mongodb+srv://FoodProject:FoodProject@cluster0.jgmpw2n.mongodb.net/?retryWrites=true&w=majority'
const mongoDB=()=>{
     mongoose.connect(mongoURL,()=>{
        console.log('DataBase Connected')
    })
}
module.exports= mongoDB;