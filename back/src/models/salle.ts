import mongoose from 'mongoose';

export class SalleDoc extends mongoose.Document {
    numero : Number;
    nbPlaces : Number;
}

const salleSchema = new mongoose.Schema({
    numero : {
        type : Number
    },
    nbPlaces : {
        type: Number
    }
});

export const Salle = mongoose.model<SalleDoc>("Salle", salleSchema);