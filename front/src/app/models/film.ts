export class Film {
    public _id : String;
    public nom : String;
    public duree : number;
    public imgUrl : String;

    constructor(id : String, nom : String, duree : number, imgUrl : String) {
        this._id = id;
        this.nom = nom;
        this.duree = duree;
        this.imgUrl = imgUrl;
    }
}