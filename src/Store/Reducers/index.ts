import { createReducer } from 'typesafe-actions';
import { UserInterface, MessageInterface } from 'Utils/Interface';
import { MessengerAction } from 'Store/Actions';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
} from 'Store/Actions/types';
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

const reducer = createReducer<DataInterface, MessengerAction>(initialState, {
  [SEND_MESSAGE]: (state = initialState, action: any) => {
    const filterUser = (userId: number) => {
      const result = state.allUsers.filter((user) => user.userId === userId);
      return result[0];
    };

    return {
      ...state,
      allMessages: [...state.allMessages].concat({
        ...action,
        user: filterUser(action.payload.userId),
      }),
    };
  },
  [REPLY_MESSAGE]: (state = initialState, action: any) => {
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
          ...action,
          user: filterUser(action.user.userId),
          reply: filterMessage(action.id),
        },
      ],
    };
  },
  [DELETE_MESSAGE]: (
    state = initialState,
    action: { payload: MessengerAction }
  ) => ({
    ...state,
    allMessages: state.allMessages.filter(
      (message) => message.id !== action.payload
    ),
  }),
  [LOGIN_USER]: (state = initialState, action: { payload: UserInterface }) => {
    return {
      ...state,
      user: action.payload,
      allUsers: [...state.allUsers, action.payload],
    };
  },
});

export default reducer;
