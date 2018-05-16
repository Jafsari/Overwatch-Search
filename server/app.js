const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use((req,res,next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
})


const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log('Server is listening')
})