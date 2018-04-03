export class GetActorNotifications {
    Limit?: number;
    Offset?: number;
}

export class GetActorNotificationsReply {
    ActorNotificationList: Array<ActorNotificationListItem>;
    TextMessagesToAlfa: Array<any>;
    UnreadNotifications: number;

}

export class ActorNotificationListItem {
    Id: number;
    ReadVia?: any;
    Status: string;
    StatusEnum: string;
    Text: string;
    TimeCreated: Date;
    TimeRead: Date;
    Type: string;
}
