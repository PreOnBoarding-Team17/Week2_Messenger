import { createReducer } from 'typesafe-actions';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
  LOGOUT_USER,
} from 'Store/Actions/types';
import { MessengerAction } from 'Store/Actions';
import { UserInterface, MessageInterface } from 'Utils/Interface';
import { SAMPLEUSER, SAMPLEMESSAGE } from 'Utils/Constant';
import {
  SendMessageActionInterface,
  ReplyMessageActionInterface,
  LoginUserActionInterface,
  NumberActionInterface,
} from 'Store/Reducers/types';

interface DataInterface {
  user: UserInterface | null;
  allUsers: UserInterface[];
  allMessages: MessageInterface[];
}

const initialState: DataInterface = {
  user: null,
  allUsers: SAMPLEUSER,
  allMessages: SAMPLEMESSAGE,
};

const reducer = createReducer<DataInterface, MessengerAction>(initialState, {
  [SEND_MESSAGE]: (
    state: DataInterface,
    { payload }: SendMessageActionInterface
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
    { payload }: ReplyMessageActionInterface
  ) => {
    const { replyMessageId, ...filterPayload } = payload;

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
          ...filterPayload,
          user: filterUser(filterPayload.userId),
          reply: filterMessage(replyMessageId),
        },
      ],
    };
  },
  [DELETE_MESSAGE]: (
    state: DataInterface,
    { payload }: NumberActionInterface
  ) => ({
    ...state,
    allMessages: state.allMessages.filter((message) => message.id !== payload),
  }),
  [LOGIN_USER]: (
    state: DataInterface,
    { payload }: LoginUserActionInterface
  ) => ({
    ...state,
    user: payload,
    allUsers: [...state.allUsers, payload],
  }),
  [LOGOUT_USER]: (
    state: DataInterface,
    { payload }: NumberActionInterface
  ) => ({
    ...state,
    user: null,
    allUsers: state.allUsers.filter((user) => user.userId !== payload),
  }),
});

export default reducer;
