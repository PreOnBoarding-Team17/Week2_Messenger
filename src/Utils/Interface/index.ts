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
  date: string; // "yyyy-mm-dd hh:MM:ss"
  reply: ReplyType; // messageId (null)
}
