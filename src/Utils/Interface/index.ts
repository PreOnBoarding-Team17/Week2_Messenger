import { ModalStateType } from 'Store/Reducers/modals';

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

export interface DataInterface {
  user: UserInterface | null;
  allUsers: UserInterface[];
  allMessages: MessageInterface[];
}

export interface ReplyDataInterface {
  id: number;
  userName: string;
  message: string;
}

export interface DeleteModalDataInterface {
  id: number;
  message: string;
}
