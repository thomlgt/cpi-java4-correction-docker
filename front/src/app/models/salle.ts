export class Salle {
    public _id : String;
    public numero : number;
    public nbPlace : number;

    constructor(id : String, numero : number, nbPlace : number) {
        this._id = id;
        this.numero = numero;
        this.nbPlace = nbPlace;
    }
}