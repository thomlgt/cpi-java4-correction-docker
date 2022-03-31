import { Salle } from './salle';

export class Cinema {
    public _id : String;
    public nom : String;
    public salles : Salle[];
    
    constructor(id : String, nom : String, salles : Salle[]) {
        this._id = id;
        this.nom = nom;
        this.salles = salles;
    }
}