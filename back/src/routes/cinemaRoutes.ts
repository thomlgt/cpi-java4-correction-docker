import { cinemaController } from "../controllers/cinemaController";

export const setCinemaRouting = (app) => {

    const endpoint = 'cinemas'

    app.get(`/${endpoint}`, cinemaController.findAll);
    app.get(`/${endpoint}/:id`, cinemaController.findById);
    app.post(`/${endpoint}`, cinemaController.create);
    app.patch(`/${endpoint}/:id`, cinemaController.update);
    app.delete(`/${endpoint}/:id`, cinemaController.delete);
}