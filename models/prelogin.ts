export class PreLoginReply<Object> {
    HasAddress: boolean;
    HasEmail: boolean;
    HasSMS: boolean;
    CustomerFirstname: string;
    CallcenterName?: string;
    CallCenterPhone?: string;
}

export class PreLoginRequest {
    Identifier: string;
    SystemId: number;
}
