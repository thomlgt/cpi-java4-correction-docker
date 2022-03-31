import { seanceController } from "../controllers/seanceController";

export const setSeanceRouting = (app) => {

    const endpoint = 'seances'

    app.get(`/${endpoint}`, seanceController.findAll);
    app.get(`/${endpoint}/:id`, seanceController.findById);
    app.get(`/${endpoint}/films/:idfilm/cinemas/:idcinema`, seanceController.findByFilmAndCinemaId);
    app.post(`/${endpoint}`, seanceController.create);
    app.patch(`/${endpoint}/:id`, seanceController.update);
    app.delete(`/${endpoint}/:id`, seanceController.delete);
}