import { filmController } from "../controllers/filmController";

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

export const setFilmRouting = (app) => {

    const endpoint = 'films'

    app.get(`/${endpoint}`, filmController.findAll);
    app.get(`/${endpoint}/:id`, filmController.findById);
    app.get(`/${endpoint}/cinemas/:id`, filmController.findDistinctByCinema);
    app.post(`/${endpoint}`, jsonParser, filmController.create);
    app.patch(`/${endpoint}/:id`, jsonParser, filmController.update);
    app.delete(`/${endpoint}/:id`, filmController.delete);
}