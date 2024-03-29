import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { replyMessage, sendMessage } from 'Store/Actions/message';
import MessageTextArea from 'Components/MessageInput/MessageTextArea';
import 'Components/MessageInput/scss/MessageInput.scss';
import useTextarea from 'Utils/Hooks/useTextarea';
import Button from 'Components/Common/Button';
import CancelIcon from 'Assets/Delete.png';

interface MessageInputProps {
  replyData: {
    id: number;
    userName: string;
    message: string;
  };
  userId: number | undefined | null;
}

const MessageInput: React.FC<MessageInputProps> = ({ replyData, userId }) => {
  const { message, setMessage, onChangeInput } = useTextarea();
  const [isReply, setIsReply] = useState<boolean>(false);
  const dispatch = useDispatch();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (userId) {
      textareaRef.current?.focus();
    }
  }, [userId]);

  useEffect(() => {
    if (replyData.id !== 0 && !isReply) {
      setMessage(
        `${replyData.userName}에게 답장\n` +
          `${replyData.message}\n<hr/>` +
          `(회신)\n` +
          message
      );
      setIsReply(true);
    }
  }, [replyData]);

  const onClickSend = useCallback((): void => {
    if (message.trim() && userId) {
      if (isReply) dispatch(replyMessage(userId, message, replyData.id));
      else dispatch(sendMessage(userId, message));
      setIsReply(false);
    }
    setMessage('');
  }, [dispatch, message, isReply]);

  const cancelReply = (): void => {
    setIsReply(false);
    setMessage('');
  };

  const onKeyEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (message && e.key === 'Enter' && e.shiftKey === false) {
      setTimeout(() => {
        onClickSend();
      }, 200);
    }
  };

  return (
    <>
      <section className="message-input">
        <div className="message-input__left-menu">
          <div className="message-input__left-menu__textarea">
            <MessageTextArea
              value={message}
              onChange={onChangeInput}
              onKeyEnter={onKeyEnter}
              textareaRef={textareaRef}
            />
          </div>
          {isReply && (
            <button
              className="message-input__left-menu__cancel-btn"
              onClick={cancelReply}
            >
              <img src={CancelIcon} alt="답장 취소" />
            </button>
          )}
        </div>
        <Button
          style="square"
          text="보내기"
          disabled={!message}
          onClick={onClickSend}
        />
      </section>
    </>
  );
};

export default MessageInput;
