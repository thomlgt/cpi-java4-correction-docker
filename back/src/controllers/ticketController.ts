import { Ticket } from "../models/ticket";

class TicketController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Ticket.find()
                .populate({path : 'seance', populate : {path : 'cinema', populate : {path : "salles"}}})
                .populate({path : 'seance', populate : {path : 'film'}}))
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Ticket.findById(req.params.id)
                .populate({path : 'seance', populate : {path : 'cinema', populate : {path : "salles"}}})
                .populate({path : 'seance', populate : {path : 'film'}}))
            .end();
        next();
    }

    findByIdAndImpress = async (req, res, next) => {
        let ticket : any = await Ticket.findById(req.params.id)
            .populate({path : 'seance', populate : {path : 'cinema', populate : {path : "salles"}}})
            .populate({path : 'seance', populate : {path : 'film'}});

        let texte = "Commande : " + ticket._id + "\n" +
        "Cinema : " + ticket.seance.cinema.nom + "\n" +
        "Film : " + ticket.seance.film.nom + "\n" + 
        "Date début : " + ticket.seance.date.toLocaleString() + "\n" +
        "Date fin : " + (new Date(ticket.seance.date.getTime() + (<number>ticket.seance.film.duree*60000)).toLocaleString()) + "\n" +
        "Salle : " + ticket.seance.numeroSalle

        res.status(200)
            .send(texte)
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(200)
            .send(await Ticket.create(req.body))
            .end();
        next();
    }
}

export const ticketController = Object.freeze(new TicketController());