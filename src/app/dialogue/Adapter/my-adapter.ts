import { HttpClient } from '@angular/common/http';
import { ChatAdapter, IChatGroupAdapter, Group, Message, ChatParticipantStatus, ParticipantResponse, ChatParticipantType, IChatParticipant, MessageType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { OtherService } from 'src/app/services/other.service';
import { Membre } from 'src/app/_models/membre.model';
import { MessageFromDb } from 'src/app/_models/message-from-db.model';
import { AuthService } from 'src/app/services/auth.service';
import { delay } from 'rxjs/operators';


export class MyAdapter extends ChatAdapter {

    constructor(
        private http: HttpClient, 
        private otherService: OtherService, 
        private authService: AuthService) {
        super();
        MyAdapter.participants = this.getParticipants();
    }

    listMembre: Membre[] = [];
    
    messageFromDb: MessageFromDb[] = [];
    public static participants: IChatParticipant[];

    getParticipants(): IChatParticipant[] {
        this.http.get(this.otherService.lienBack + 'liste_membre').subscribe({
            next: (data) => { this.listMembre = data as Membre[] },
            error: (err) => { console.log(err) }
        });
        let i = 0;
        let participants: IChatParticipant[] = [];
        this.listMembre.forEach(membre => {
            participants[i] = {
                participantType: ChatParticipantType.User,
                id: membre.id,
                displayName: membre.pseudo as string,
                avatar: "../../assets/icons/icons_chat/avatar2.svg",
                status: ChatParticipantStatus.Online
            }
            i += 1;
        })
        return participants;
    }

    listFriends(): Observable<ParticipantResponse[]> {
        MyAdapter.participants = this.getParticipants();
        return of(MyAdapter.participants.map(user => {
            let participantResponse = new ParticipantResponse();

            participantResponse.participant = user;
            participantResponse.metadata = {
                totalUnreadMessages: 2
            }

            return participantResponse;
        }));
    }

 
    getMessageHistory(destinaryId: any): Observable<Message[]> {
        let History: Array<Message> = [];
        let i = 0;

        console.log(destinaryId);
        this.http.get(this.otherService.lienBack + "message_from/" + destinaryId + '/' + this.authService.currentUserValue?.id).subscribe({
            next: (data) => { this.messageFromDb = data as MessageFromDb[] },
            error: (err) => { console.log(err) }
        });
        console.log(this.messageFromDb);
        this.messageFromDb.forEach(m => {
            History[i] = {
                fromId: destinaryId,
                toId: this.authService.currentUserValue?.id,
                message: m.message as string,
                dateSent: m.dateSent
            };
            i++;
        });
        console.log(History);
        return of(History).pipe(delay(200));
    }

    sendMessage(m: Message): void {
        this.http.post(this.otherService.lienBack + "envoi_message", {
            sender: {id: m.fromId},
            receiver: {id : m.toId},
            message: m.message,
            dateSent: new Date()            
        }).subscribe({
            error: (err) => { console.log(err) }
        });
    }


    // groupCreated(group: Group): void {
    //     MyAdapter.participants.push(group);

    //     MyAdapter.participants = MyAdapter.participants.sort((first, second) =>
    //         second.displayName > first.displayName ? -1 : 1
    //     );

    //     // Trigger update of friends list
    //     this.listFriends().subscribe(response => {
    //         this.onFriendsListChanged(response);
    //     });
    // }


}

