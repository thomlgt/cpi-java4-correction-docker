import { ticketController } from "../controllers/ticketController";

export const setTicketRouting = (app) => {

    const endpoint = 'tickets'

    app.get(`/${endpoint}`, ticketController.findAll);
    app.get(`/${endpoint}/:id`, ticketController.findById);
    app.get(`/${endpoint}/:id/impression`, ticketController.findByIdAndImpress);
    app.post(`/${endpoint}`, ticketController.create);
}