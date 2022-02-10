import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
} from 'Store/Actions/types';
import { formatDate } from 'Utils/Constant/';

let USER_ID = 4;
let MESSAGE_ID = 6;

// 메세지 보내기
export function sendMessage(userId: number, message: string) {
  return {
    type: SEND_MESSAGE,
    payload: {
      id: MESSAGE_ID++,
      userId,
      content: message,
      date: formatDate(),
      reply: null,
    },
  };
}

// 답장하기
export function replyMessage(
  userId: number,
  message: string,
  replyMessageId: number
) {
  return {
    type: REPLY_MESSAGE,
    payload: {
      id: MESSAGE_ID++,
      userId,
      content: message,
      date: formatDate(),
      replyMessageId,
    },
  };
}

// 삭제하기
export function deleteMessage(messageId: number) {
  return {
    type: DELETE_MESSAGE,
    payload: messageId,
  };
}

// 로그인
export function loginUser(userName: string, _profileImage: string) {
  return {
    type: LOGIN_USER,
    payload: {
      userId: USER_ID++,
      userName,
      profileImage: 'a',
    },
  };
}

export type MessengerAction =
  | ReturnType<typeof sendMessage>
  | ReturnType<typeof replyMessage>
  | ReturnType<typeof deleteMessage>
  | ReturnType<typeof loginUser>;
