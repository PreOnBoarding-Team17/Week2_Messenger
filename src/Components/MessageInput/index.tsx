import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { replyMessage, sendMessage } from 'Store/Actions/message';
import MessageTextArea from 'Components/MessageInput/MessageTextArea';
import 'Components/MessageInput/scss/MessageInput.scss';

interface MessageInputProps {
  replyData: {
    id: number;
    userName: string;
    message: string;
  };
}

const MessageInput: React.FC<MessageInputProps> = ({ replyData }) => {
  const [message, setMessage] = useState<string>('');
  const [isReply, setIsReply] = useState<boolean>(false);
  const dispatch = useDispatch();

  // userId 받아오는 로직 추가

  // reply 하는 경우 messageId 받아오는 로직 추가
  // messageId 받아오고 사용자이름, 메세지 내용 받아오기

  useEffect(() => {
    if (replyData.id !== 0) {
      onClickReply();
    }
  }, [replyData]);

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const onClickSend = useCallback((): void => {
    console.log(message);

    if (message) {
      if (isReply) dispatch(replyMessage(3, message, replyData.id));
      else dispatch(sendMessage(3, message));
      setMessage('');
      setIsReply(false);
    }
  }, [dispatch, message, isReply]);

  const onClickReply = (): void => {
    if (!isReply) {
      // setMessage(`사용자 이름\n` + `메시지 내용\n` + `(회신)\n` + message);
      setMessage(
        `${replyData.userName}\n` +
          `${replyData.message}\n` +
          `(회신)\n` +
          message
      );
    }
    setIsReply(true);
  };

  const cancelReply = (): void => {
    setIsReply(false);
  };

  return (
    <>
      <section className="message-input">
        <div className="message-input__left-menu">
          <div className="message-input__left-menu__textarea">
            <MessageTextArea value={message} onChange={onChangeInput} />
          </div>
          {isReply && (
            <button
              className="message-input__left-menu__cancel-btn"
              onClick={cancelReply}
            >
              reply 취소
            </button>
          )}
        </div>
        <button
          type="button"
          className="message-input__send-btn"
          onClick={onClickSend}
          disabled={!message}
        >
          보내기
        </button>
      </section>
    </>
  );
};

export default MessageInput;
