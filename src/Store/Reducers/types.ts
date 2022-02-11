import {
  UserInterface,
  SendMessagePayloadInterface,
  ReplyMessagePayloadInterface,
} from 'Utils/Interface';

export interface ActionInterface {
  text: string;
}
export interface SendMessageActionInterface extends ActionInterface {
  payload: SendMessagePayloadInterface;
}

export interface ReplyMessageActionInterface extends ActionInterface {
  payload: ReplyMessagePayloadInterface;
}
export interface LoginUserActionInterface extends ActionInterface {
  payload: UserInterface;
}
export interface NumberActionInterface extends ActionInterface {
  payload: number;
}
