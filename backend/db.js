const mongoose = require('mongoose')

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(process.env.DB,
            connectionParams

        );
        console.log('Connected to databse successfully');
    }
    catch (error) {
        console.log(`Could not connect to database`, error);
    }
}