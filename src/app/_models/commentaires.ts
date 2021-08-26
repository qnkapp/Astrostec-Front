import { Sujets } from './sujets.model';
import { Membre } from "./membre.model";

export class Commentaires {
    id!: Number;
    commente!: Membre;
    commentaires!: String;
    sujet!: Sujets;
    dateCom!: Date;
}