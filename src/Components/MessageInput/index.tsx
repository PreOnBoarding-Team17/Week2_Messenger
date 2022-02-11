import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { replyMessage, sendMessage } from 'Store/Actions';
import MessageTextArea from 'Components/MessageInput/MessageTextArea';
import 'Components/MessageInput/scss/MessageInput.scss';

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');
  const [isReply, setIsReply] = useState<boolean>(false);
  const dispatch = useDispatch();

  // userId 받아오는 로직 추가

  // reply 하는 경우 messageId 받아오는 로직 추가
  // messageId 받아오고 사용자이름, 메세지 내용 받아오기

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const onClickSend = useCallback((): void => {
    console.log(message);

    if (message) {
      if (isReply) dispatch(replyMessage(4, message, 1));
      else dispatch(sendMessage(4, message));
      setMessage('');
      setIsReply(false);
    }
  }, [dispatch, message, isReply]);

  const onClickReply = (): void => {
    if (!isReply) {
      setMessage(`사용자 이름\n` + `메시지 내용\n` + `(회신)\n` + message);
    }
    setIsReply(true);
  };

  const cancelReply = (): void => {
    setIsReply(false);
  };

  return (
    <>
      <section style={{ height: 'calc(80vh - 260px)' }}>
        임시컨테이너
        <button onClick={onClickReply}>임시reply버튼</button>
      </section>
      <section className="message-input">
        <div className="message-input__left-menu">
          {isReply && (
            <button
              className="message-input__left-menu__cancel-btn"
              onClick={cancelReply}
            >
              reply 취소
            </button>
          )}
          <div className="message-input__left-menu__textarea">
            <MessageTextArea value={message} onChange={onChangeInput} />
          </div>
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
