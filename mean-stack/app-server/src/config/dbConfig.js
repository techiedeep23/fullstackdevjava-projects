const mongoose = require('mongoose');
mongoose.Promise = Promise ;
const connectLibraryDb = async () => {

    try {
            const connection = await mongoose.connect(process.env.LIBRARY_APP_DB_CONNECTION_STRING);
            mongoose.connection.on('error',(error) => console.log(error));
            console.log("Connected to mongo db");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectLibraryDb ;