// 메시지의 데이터 모델에는 userId, userName, profileImage, content, date 등이 있습니다. 옵션 Reply

export const SEND_MESSAGE = "SEND_MESSAGE" as const;
export const DELETE_MESSAGE = "DELETE_MESSAGE" as const;
export const REPLY_MESSAGE = "REPLY_MESSAGE" as const;
export const LOGIN_USER = "LOGIN_USER" as const;

// 메세지 보내기 -> MessageInterface
export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  };
}

// 답장하기 -> MessageInterface
export function replyMessage() {
  return {
    type: REPLY_MESSAGE,
  };
}

// 삭제하기 -> MessageInterface
export function deleteMessage() {
  return {
    type: DELETE_MESSAGE,
  };
}

// 로그인하기 -> UserInterface
export function loginUser() {
  return {
    type: LOGIN_USER,
  };
}
