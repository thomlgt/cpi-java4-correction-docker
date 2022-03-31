import mongoose from "mongoose";
import { SalleDoc } from "./salle";

export class CinemaDoc extends mongoose.Document {
    nom : String;
    salles : SalleDoc[];
}

const cinemaSchema = new mongoose.Schema({
    nom : {
        type : String
    },
    salles : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Salle'
    }]
});

export const Cinema = mongoose.model<CinemaDoc>("Cinema", cinemaSchema);