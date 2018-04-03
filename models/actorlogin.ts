export class ActorLoginRequest {
    Domain?: string;
    Username: string;
    Password: string;

}

export class ActorLoginRequestReply {
    Actor: Actor;
    AuthToken: string;
    PasswordExpired: boolean;
    Success: boolean;

}

export class  Actor {
    AccessRights: Array<string>;
    Email: string;
    Firstname: string;
    Id: number;
    Lastname: string;
    Username: string;

}
