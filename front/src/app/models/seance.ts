import { Cinema } from "./cinema";
import { Film } from "./film";

export class Seance {
    public _id : String;
    public date : Date;
    public film : Film;
    public cinema : Cinema;
    public numeroSalle : number;

    constructor(id : String, date : Date, film : Film, cinema : Cinema, numeroSalle : number) {
        this._id = id;
        this.date = date;
        this.film = film;
        this.cinema = cinema;
        this.numeroSalle = numeroSalle;
    }
}