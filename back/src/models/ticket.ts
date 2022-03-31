import mongoose from 'mongoose';
import { SeanceDoc } from './seance';

export class TicketDoc extends mongoose.Document {
    seance : SeanceDoc
}

const ticketSchema = new mongoose.Schema({
    seance : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Seance"
    }
});

export const Ticket = mongoose.model<TicketDoc>("Ticket", ticketSchema)