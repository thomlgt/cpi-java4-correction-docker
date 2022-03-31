import mongoose from "mongoose";

export const setMongoConnection = () => {
    const mongoUrl = `mongodb://${process.env["MONGO_HOST"] || "localhost"}:27017`;
    console.log(mongoUrl)
    mongoose.connect(mongoUrl, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if(err) {
            console.error(err);
        } else {
           console.log("Connecté à la base de données"); 
        }
        
    })
} 