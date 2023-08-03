const { default: mongoose } = require('mongoose');

const {Schema} = mongoose;
const MySchema= new Schema(
    {
        CategoryName:String,
        img:String,
        name:String,
        description:String,
        price:String
    }
)
const FoodItems= mongoose.model("fooditems",MySchema)
module.exports=FoodItems