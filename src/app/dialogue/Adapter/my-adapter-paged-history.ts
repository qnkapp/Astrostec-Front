import { ChatAdapter, IChatGroupAdapter, Group, User, Message, ChatParticipantStatus, PagedHistoryChatAdapter, ParticipantResponse, ParticipantMetadata } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { MyAdapter } from './my-adapter';
import { delay } from "rxjs/operators";

export class MyAdapterPagedHistory extends PagedHistoryChatAdapter implements IChatGroupAdapter
{
    private historyMessages: Message[] = [];
    
    constructor() {
        super();
        for(let i: number = 0; i < 2; i++) {
            let msg = {
                fromId: 1,
                toId: 999,
                message: `${2-i}. Hello there, just type any message bellow to test this Angular module.`,
                dateSent: new Date()
            };
            
            this.historyMessages.push(msg);
        }
    }

    listFriends(): Observable<ParticipantResponse[]> {
        return of(MyAdapter.mockedParticipants.map(user => {
            let participantResponse = new ParticipantResponse();

            participantResponse.participant = user;
            participantResponse.metadata = {
                totalUnreadMessages: 4 // Demo history page size
            }

            return participantResponse;
        }));
    }

    getMessageHistory(destinataryId: any): Observable<Message[]> {
       let mockedHistory: Array<Message>;
       mockedHistory = [
            {
                fromId: 1,
                toId: 999,
                message: "Hi there, just type any message bellow to test this Angular module.",
                dateSent: new Date()
            }
       ];

       return of(mockedHistory);
    }
    
    public getMessageHistoryByPage(destinataryId: any, size: number, page: number) : Observable<Message[]> {
       let startPosition: number = (page - 1) * size;
       let endPosition: number = page * size;
       let mockedHistory: Array<Message> = this.historyMessages.slice(startPosition, endPosition);
       return of(mockedHistory.reverse()).pipe(delay(5000));
    }
    
    
    sendMessage(message: Message): void {
        setTimeout(() => {
            let replyMessage = new Message();

            replyMessage.message = "You have typed '" + message.message + "'";
            replyMessage.dateSent = new Date();
            
            if (isNaN(message.toId))
            {
                let group = MyAdapter.mockedParticipants.find(x => x.id == message.toId) as Group;

                // Message to a group. Pick up any participant for this
                let randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
                replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;

                replyMessage.toId = message.toId;

                this.onMessageReceived(group, replyMessage);
            }
            else
            {
                replyMessage.fromId = message.toId;
                replyMessage.toId = message.fromId;
                
                let user = MyAdapter.mockedParticipants.find(x => x.id == replyMessage.fromId)!;

                this.onMessageReceived(user, replyMessage);
            }
            
        }, 1000);
    }

    groupCreated(group: Group): void {
        MyAdapter.mockedParticipants.push(group);

        MyAdapter.mockedParticipants = MyAdapter.mockedParticipants.sort((first, second) => 
            second.displayName > first.displayName ? -1 : 1
        );

        // Trigger update of friends list
        this.listFriends().subscribe(response => {
            this.onFriendsListChanged(response);
        });
    }   
}
