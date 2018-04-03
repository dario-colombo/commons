export class Booking {
    AddressStart: ResponseAddress;
    AddressEnd: ResponseAddress;
    AloneInVehicle: boolean;
    AssistanceFrom: { AssistanceId: number, Name: string };
    AssistanceTo: { AssistanceId: number, Name: string };
    BookingId: number;
    BookingNbr?: string;
    BookingState: number;
    BookingStateString: string;
    CoTravellers: Array<ResponseCoTravellers>;
    ContactPhoneNumber?: string;
    Equipments: Array<ResponseEquipments>;
    HandOver: boolean;
    HandOverInfo: boolean;
    HasBeenRated: boolean;
    Jobs: Array<Job>;
    NbrMinDelayed: number;
    RoutineId: number;
    SeatingType: { Name: string, SeatingTypeId: number };
    ServiceFee: string;
    TicketType: { Code: string, Name: string };
    TimeDropEstimated: Date;
    TimePickupDelayed: Date;
    TimePickupNegotiated: Date;
    TimeType: string;
}

export class NewBooking {

}

export class BookingListItem {
    AddressStart: ResponseAddress;
    AddressEnd: ResponseAddress;
    BookingId: number;
    BookingNbr?: string;
    BookingState: number;
    BookingStateString: string;
    Customer?: any;
    DriverAssistance?: any;
    Equipment?: any;
    HasGpsPosition?: any;
    Routine?: string;
    RoutineId: number;
    SeatingType: { Name: string, SeatingTypeId: number };
    ServiceFee: string;
    ServiceFeeInvocied: boolean;
    TimeDropEstimated: Date;
    TimePickupDelayed: Date;
    TimePickupNegotiated: Date;
    TimePickupPlanned: Date;
    TimeStatusChanged: Date;
}

export class GetBookingsRequest {
    StartDate?: Date;
    EndDate?: Date;
    Limit?: number;
    Offset?: number;
}
export class GetBookingSolution {
    AddressFrom: number;
    AddressTo: number;
    AssistanceDrop?: number;
    AssistancePickup?: number;
    CoTravellers: Array<Object> = [];
    Equipment: Array<Object> = [];
    LegId: number;
    SeatingType: number;
    TicketType: string;
    TimeType: string;
    TimeWanted: Date;
}

export class GetBookingSolutionReply {
    CapacityInfo: string;
    ContactInfo: string;
    CustomerCost: string;
    CustomerCostInfo: string;
    CustomerGuidanceInfo: any;
    EquipmentInfo: string;
    Errors: Array<any> = [];
    Passenger: string;
    SeatingInfo: string;
    Booking: Booking;

}

export class ResponseAddress {
    AddressId: number;
    Name: string;
    GpsLocation: {
        Latitude: number;
        Longitude: number;
    };
}
export class ResponseCoTravellers {
    Key: {
        CoTravellerCode?: number;
        CoTravellerId: number;
        Name: string
    };
    Value: number;
}
export class ResponseEquipments {
    Key: {
        EquipmentId: number;
        Name: string
    };
    Value: number;
}

export class Job {
    BookingId: number;
    CoTravellers;
    Equipment;
    Extra;
    JobId: number;
    JobState: number;
    JobStateChangedTimestamp: Date;
    JobStateString: string;
    JobType: number;
    LineInfo;
    LocationInfo;
    Nodes: Array<Node>;
    ServiceFee;
    ServiceFeeValue;
    VehicleInfo;

}
export class Node {
    Address: ResponseAddress;
    Assistance: { AssistanceId: number, Name: string };
    BookingId: number;
    DriverSessionExecUnitId: number;
    NodeStatus: number;
    NodeStatusString: string;
    NodeType: number;
    NodeTypeString: string;
    PhoneNumber: string;
    TimeDelayed: Date;
    TimeExecuted: Date;
    TimeNegotiated: Date;
    TimePlanned: Date;
    TimeType: number;
    TimeTypeString: string;
}


