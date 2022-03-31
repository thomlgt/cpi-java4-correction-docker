import { Salle } from "../models/salle";

class SalleController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Salle.find())
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Salle.findById(req.params.id))
            .end();
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
            .send(await Salle.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        res.status(200)
            .send(await Salle.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Salle.findByIdAndRemove(req.params.id))
            .end()
        next();
    }
}

export const salleController = Object.freeze(new SalleController());


