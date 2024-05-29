const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const { User } = require('./models/User');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require('./routes/users');
app.use('/user', userRoutes);

const searchRoutes = require('./routes/movies');
app.use('/search', searchRoutes);

app.get('/', (req, res) => {
    res.json({message: "Api Server Running"});
})

app.listen(PORT, async ()=> {
    console.log("server started: " + PORT);
    await connectDB();
    //console.log(await User.find());
})

