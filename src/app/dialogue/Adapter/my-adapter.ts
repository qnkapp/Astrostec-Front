import { HttpClient } from '@angular/common/http';
import { ChatAdapter, IChatGroupAdapter, Group, Message, ChatParticipantStatus, ParticipantResponse, ChatParticipantType, IChatParticipant, MessageType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { OtherService } from 'src/app/services/other.service';
import { Membre } from 'src/app/_models/membre.model';


export class MyAdapter extends ChatAdapter implements IChatGroupAdapter {

    constructor(private http: HttpClient, private otherService: OtherService) {
        super();
        MyAdapter.participants = this.getParticipants();
    }

    listMembre: Membre[] = [];

    public static participants: IChatParticipant[];

    getParticipants(): IChatParticipant[] {
        this.http.get(this.otherService.lienBack + 'liste_membre').subscribe({
            next: (data) => { this.listMembre = data as Membre[] },
            error: (err) => { console.log(err) }
        });
        let i = 0;
        let participants: IChatParticipant[] = [] ;
        this.listMembre.forEach(membre => {
            participants[i] = {
                participantType: ChatParticipantType.User,
                id: membre.id,
                displayName: membre.pseudo as string,
                avatar: "../../assets/icons/icons_chat/avatar2.svg",
                status: ChatParticipantStatus.Away
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

    getMessageHistory(destinataryId: any): Observable<Message[]> {
        let mockedHistory: Array<Message>;

        mockedHistory = [
            {
                fromId: MessageType.Text,
                toId: 999,
                message: "Bonjour !",
                dateSent: new Date()
            },
            {
                fromId: MessageType.Text,
                toId: 999,
                message: "Ecris moi un message pour essayer :",
                dateSent: new Date()
            },
        ];

        return of(mockedHistory).pipe(delay(200));
    }

    sendMessage(message: Message): void {
        setTimeout(() => {
            let replyMessage = new Message();

            replyMessage.message = message.message;
            replyMessage.dateSent = new Date();
            if (isNaN(message.toId)) {
                let group = MyAdapter.participants.find(x => x.id == message.toId) as Group;

                // Message to a group. Pick up any participant for this
                let randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
                replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;

                replyMessage.toId = message.toId;

                this.onMessageReceived(group, replyMessage);
            }
            else {
                replyMessage.fromId = message.toId;
                replyMessage.toId = message.fromId;

                let user = MyAdapter.participants.find(x => x.id == replyMessage.fromId)!;

                this.onMessageReceived(user, replyMessage);
            }
        }, 1000);
    }


    groupCreated(group: Group): void {
        MyAdapter.participants.push(group);

        MyAdapter.participants = MyAdapter.participants.sort((first, second) =>
            second.displayName > first.displayName ? -1 : 1
        );

        // Trigger update of friends list
        this.listFriends().subscribe(response => {
            this.onFriendsListChanged(response);
        });
    }


}

