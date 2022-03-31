import { salleController } from "../controllers/salleController";

export const setSalleRouting = (app) => {

    const endpoint = 'salles'

    app.get(`/${endpoint}`, salleController.findAll);
    app.get(`/${endpoint}/:id`, salleController.findById);
    app.post(`/${endpoint}`, salleController.create);
    app.patch(`/${endpoint}/:id`, salleController.update);
    app.delete(`/${endpoint}/:id`, salleController.delete);
}