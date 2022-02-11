export type ReplyType = null | MessageInterface;

export interface UserInterface {
  userId: number;
  userName: string;
  profileImage: string;
}

export interface MessageInterface {
  id: number;
  user: UserInterface;
  content: string;
  date: string;
  reply: ReplyType;
}

export interface MessagePayloadInterface {
  id: number;
  userId: number;
  content: string;
  data: string;
}
export interface SendMessagePayloadInterface extends MessagePayloadInterface {
  reply: null;
}

export interface ReplyMessagePayloadInterface extends MessagePayloadInterface {
  replyMessageId: number;
}
