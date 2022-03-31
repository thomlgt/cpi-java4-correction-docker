import express from 'express';
import { setMongoConnection } from './config/mongo.config';
import { setCinemaRouting } from './routes/cinemaRoutes';
import { setFilmRouting } from './routes/filmRoutes';
import { setSalleRouting } from './routes/salleRoutes';
import { setSeanceRouting } from './routes/seanceRoutes';
import { setTicketRouting } from './routes/ticketRoutes';
import cors from 'cors';

const app = express();
const port = process.env["PORT"] || 8080;

app.use(express.json());
app.use(cors());

//Lancement du serveur Node
app.listen(port, () => {
    console.log(`Serveur listening on port : ${port}`);
})

//Connexion à la base de donnée
setMongoConnection();

//Définition des routes
setCinemaRouting(app);
setFilmRouting(app);
setSeanceRouting(app);
setSalleRouting(app);
setTicketRouting(app);
