import mongoose from 'mongoose';

export class FilmDoc extends mongoose.Document {
    nom : String;
    duree : Number;
}

const filmSchema = new mongoose.Schema({
    nom : {
        type : String
    },
    duree : {
        //Exprimé en nombre de minutes
        type : Number
    },
    imgUrl : {
        type : String
    }
});

export const Film = mongoose.model<FilmDoc>("Film", filmSchema);