import { UserInterface, MessageInterface } from 'Utils/Interface';
import { MessengerAction } from 'Store/Actions';
import { SAMPLEUSER, SAMPLEMESSAGE } from 'Utils/Constant';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOGIN_USER,
} from 'Store/Actions/types';

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

const reducer = (
  state = initialState,
  action: MessengerAction
): DataInterface => {
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

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        allMessages: [
          ...state.allMessages,
          {
            ...action.payload,
            user: filterUser(action.payload.userId),
          },
        ],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        allMessages: state.allMessages.filter(
          (message) => message.id !== action.payload
        ),
      };
    case REPLY_MESSAGE:
      return {
        ...state,
        allMessages: [
          ...state.allMessages,
          {
            ...action.payload,
            user: filterUser(action.payload.userId),
            reply: filterMessage(action.payload.replyMessageId),
          },
        ],
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        allUsers: [...state.allUsers, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
