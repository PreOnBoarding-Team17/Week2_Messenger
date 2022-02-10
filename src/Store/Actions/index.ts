import { createAction, createCustomAction, ActionType } from 'typesafe-actions';
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
// export const sendMessage = createAction(
//   SEND_MESSAGE,
//   (userId: number, message: string) => ({
//     id: MESSAGE_ID++,
//     userId,
//     content: message,
//     date: formatDate(),
//     reply: null,
//   })
// )();
export const sendMessage = createCustomAction(
  SEND_MESSAGE,
  (userId: number, message: string) => ({
    payload: {
      id: MESSAGE_ID++,
      userId,
      content: message,
      date: formatDate(),
      reply: null,
    },
  })
);

// 답장하기
export const replyMessage = createCustomAction(
  REPLY_MESSAGE,
  (userId: number, message: string, replyMessageId: number) => ({
    payload: {
      id: MESSAGE_ID++,
      userId,
      content: message,
      date: formatDate(),
      replyMessageId,
    },
  })
);

// 삭제하기
export const deleteMessage = createCustomAction(
  DELETE_MESSAGE,
  (messageId: number) => ({
    payload: {
      messageId,
    },
  })
);

// 로그인
export const loginUser = createCustomAction(LOGIN_USER, (userName: string) => ({
  payload: {
    userId: USER_ID++,
    userName,
    profileImage: 'a',
  },
}));

const actions = {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
};

export type MessengerAction = ActionType<typeof actions>;
