import { createReducer } from 'typesafe-actions';
import { UserInterface, MessageInterface } from 'Utils/Interface';
import { MessengerAction } from 'Store/Actions';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
  LOGOUT_USER,
} from 'Store/Actions/types';
import { SAMPLEUSER, SAMPLEMESSAGE } from 'Utils/Constant';

interface DataInterface {
  user: UserInterface | null;
  allUsers: UserInterface[];
  allMessages: MessageInterface[];
}

interface MessagePayload {
  id: number;
  userId: number;
  content: string;
  data: string;
}
interface SendMessagePayload extends MessagePayload {
  reply: null;
}

interface ReplyMessagePayload extends MessagePayload {
  replyMessageId: number;
}

const initialState: DataInterface = {
  user: null,
  allUsers: SAMPLEUSER,
  allMessages: SAMPLEMESSAGE,
};

const reducer = createReducer<DataInterface, MessengerAction>(initialState, {
  [SEND_MESSAGE]: (
    state: DataInterface,
    { payload }: { text: string; payload: SendMessagePayload }
  ) => ({
    ...state,
    allMessages: [
      ...state.allMessages,
      {
        ...payload,
        ...state.allUsers.filter((user) => user.userId === payload.userId)[0],
      },
    ],
  }),
  [REPLY_MESSAGE]: (
    state: DataInterface,
    { payload }: { text: string; payload: ReplyMessagePayload }
  ) => {
    const filterUser = (userId: number) => {
      const result = state.allUsers.filter((user) => user.userId === userId);
      return result[0];
    };

    const filterMessage = (messageId: number) => {
      const result = state.allMessages.filter(
        (message) => message.id === messageId
      );
      return result[0];
    };
    return {
      ...state,
      allMessages: [
        ...state.allMessages,
        {
          ...payload,
          user: filterUser(payload.userId),
          reply: filterMessage(payload.id),
        },
      ],
    };
  },
  [DELETE_MESSAGE]: (
    state: DataInterface,
    { payload }: { type: string; payload: number }
  ) => ({
    ...state,
    allMessages: state.allMessages.filter((message) => message.id !== payload),
  }),
  [LOGIN_USER]: (
    state: DataInterface,
    { payload }: { type: string; payload: UserInterface }
  ) => ({
    ...state,
    user: payload,
    allUsers: [...state.allUsers, payload],
  }),
  [LOGOUT_USER]: (
    state: DataInterface,
    { payload }: { type: string; payload: number }
  ) => ({
    ...state,
    user: null,
    allUsers: state.allUsers.filter((user) => user.userId !== payload),
  }),
});

export default reducer;
