import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { replyMessage, sendMessage } from 'Store/Actions/message';
import MessageTextArea from 'Components/MessageInput/MessageTextArea';
import 'Components/MessageInput/scss/MessageInput.scss';
import useTextarea from 'Utils/Hooks/useTextarea';
import Button from 'Components/Common/Button';

interface MessageInputProps {
  replyData: {
    id: number;
    userName: string;
    message: string;
  };
}

const MessageInput: React.FC<MessageInputProps> = ({ replyData }) => {
  const { message, setMessage, onChangeInput } = useTextarea();
  const [isReply, setIsReply] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (replyData.id !== 0 && !isReply) {
      setMessage(
        `${replyData.userName}\n` +
          `${replyData.message}\n` +
          `(회신)\n` +
          message
      );
      setIsReply(true);
    }
  }, [replyData]);

  const onClickSend = useCallback((): void => {
    console.log(message);

    if (message) {
      if (isReply) dispatch(replyMessage(3, message, replyData.id));
      else dispatch(sendMessage(3, message));
      setMessage('');
      setIsReply(false);
    }
  }, [dispatch, message, isReply]);

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
        <Button
          style="square"
          text="보내기"
          disabled={!message}
          onClick={onClickSend}
        />
        {/* <button
          type="button"
          className="message-input__send-btn"
          onClick={onClickSend}
          disabled={!message}
        >
          보내기
        </button> */}
      </section>
    </>
  );
};

export default MessageInput;
