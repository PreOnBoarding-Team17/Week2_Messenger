import { deprecated, createCustomAction, ActionType } from 'typesafe-actions';
import { formatDate } from 'Utils/Constant/';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
  ACTIONS,
  LOGOUT_USER,
} from 'Store/Actions/types';

let USER_ID = 4;
let MESSAGE_ID = 6;

const { createStandardAction } = deprecated;

// 메세지 보내기
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
export const deleteMessage = createStandardAction(DELETE_MESSAGE)<number>();

// 로그인
export const loginUser = createCustomAction(
  LOGIN_USER,
  (userName: string, profileImage: string) => ({
    payload: {
      userId: USER_ID++,
      userName,
      profileImage,
    },
  })
);

// 로그아웃
export const logoutUser = createStandardAction(LOGOUT_USER)<number>();

export type MessengerAction = ActionType<typeof ACTIONS>;
