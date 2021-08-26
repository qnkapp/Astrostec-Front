import { Membre } from "./membre.model";

export class MessageFromDb {
    id!: Number;
    sender!: Membre;
    receiver!: Membre;
    message!: String;
    dateSent!: Date;
}