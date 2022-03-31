import mongoose from 'mongoose';
import { CinemaDoc } from './cinema';
import { FilmDoc } from './film';

export class SeanceDoc extends mongoose.Document {
    date : Date;
    film : FilmDoc;
    cinema : CinemaDoc;
    numeroSalle : Number;
}

const seanceSchema = new mongoose.Schema({
    date : {
        type : Date
    },
    film : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Film'
    },
    cinema : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Cinema'
    },
    numeroSalle : {
        type : Number
    }
});

export const Seance = mongoose.model<SeanceDoc>("Seance", seanceSchema);