const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const mailRoutes = require('./routes/mail');
const auth = require('./middleware/auth');
const app = express();
const sockets = require('./socket/chatsockets.js')
const overwatch = require('overwatch-api');

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/auth",authRoutes);
app.use("/api/users",auth.loginRequired,userRoutes);
app.use("/api/mail",auth.loginRequired,mailRoutes);

app.use((req,res,next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
})

app.use((err,req,res,next) => {
    return res.status(err.status || 500).json({
        message: err.message,
        error: app.get("env") === "development" ? err : {}
    });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`)
})