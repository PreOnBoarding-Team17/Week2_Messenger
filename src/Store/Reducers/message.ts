import { createReducer } from 'typesafe-actions';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
  LOGOUT_USER,
} from 'Store/Actions/types';
import { MessengerAction } from 'Store/Actions/message';
import { UserInterface, MessageInterface } from 'Utils/Interface';
import { SAMPLEUSER, SAMPLEMESSAGE } from 'Utils/Constant';

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

const message = createReducer<DataInterface, MessengerAction>(initialState, {
  [SEND_MESSAGE]: (state: DataInterface, action) => ({
    ...state,
    allMessages: [
      ...state.allMessages,
      {
        ...action.payload,
        user: state.allUsers.filter(
          (user) => user.userId === action.payload.userId
        )[0],
      },
    ],
  }),
  [REPLY_MESSAGE]: (state: DataInterface, action) => {
    const { replyMessageId, ...filterPayload } = action.payload;

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
  [DELETE_MESSAGE]: (state: DataInterface, action) => ({
    ...state,
    allMessages: state.allMessages.filter(
      (message) => message.id !== action.payload
    ),
  }),
  [LOGIN_USER]: (state: DataInterface, action) => ({
    ...state,
    user: action.payload,
    allUsers: [...state.allUsers, action.payload],
  }),
  [LOGOUT_USER]: (state: DataInterface, action) => ({
    ...state,
    user: null,
    allUsers: state.allUsers.filter((user) => user.userId !== action.payload),
  }),
});

export default message;
