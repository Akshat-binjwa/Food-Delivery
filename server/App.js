const Express= require('express')
const cors=require('cors')
const App= Express();
const UserRoute= require('./Routes/UserRoute')
const MongoDB= require('./db');
MongoDB();
App.use(cors())
App.use(Express.json());


App.use('/',UserRoute)

App.listen(5000,()=>{
    console.log('App is running on 5000')
})