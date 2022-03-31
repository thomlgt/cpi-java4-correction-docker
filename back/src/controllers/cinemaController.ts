import { Cinema } from "../models/cinema";

class CinemaController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Cinema.find().populate("salles"))
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Cinema.findById(req.params.id).populate("salles"))
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
            .send(await Cinema.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        res.status(200)
            .send(await Cinema.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Cinema.findByIdAndRemove(req.params.id))
            .end()
        next();
    }
}

export const cinemaController = Object.freeze(new CinemaController());


