const express = require('express');
const app = express();
const db = require('./utils/db.js')
const userRouter = require('./routes/users.js');
const busesRouter = require('./routes/bus.js');

app.use(express.json());

app.get("/",(req,res) =>{
    res.send("hello world")
});

app.use("/users",userRouter);

app.use("/buses",busesRouter);

db.sync({force: true}).then(() =>{
    const port = 3000;
    
    app.listen(port,() =>{
        console.log("Server started");
    });
}).catch((err) =>{
    console.log(err)
})
