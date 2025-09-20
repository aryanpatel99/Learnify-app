const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./configs/mongodb');
const { ClerkWebhook } = require('./controllers/webhooks');
dotenv.config();

const app = express();
connectDB();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the LMS API"
    })
})


app.post('/clerk',ClerkWebhook)










app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});