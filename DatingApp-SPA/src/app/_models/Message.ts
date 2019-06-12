export interface Message {
    id: number;
    senderId: number;
    senderKnownAs: String;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAs: String;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
