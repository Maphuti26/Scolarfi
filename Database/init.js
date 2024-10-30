// This file can be used for database initialization if needed
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected');
    process.exit();
}).catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
});
