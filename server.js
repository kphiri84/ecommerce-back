const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const db = require("./app/models");

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))
 
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app); 
require('./app/routes/product.routes')(app);
require('./app/routes/category.routes')(app);
require('./app/routes/productcategory.routes')(app);

app.get("/", (req, res) => {
    res.json({message: "Hello World"})
})

db.sequelize.sync(/*{force: true}*/).then(() => {
    console.log('Drop and Resync Db')
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})