import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { replyMessage, sendMessage } from 'Store/Actions';
import 'Components/MessageInput/scss/MessageInput.scss';

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');
  const [isReply, setIsReply] = useState<boolean>(false);
  const dispatch = useDispatch();

  // userId 받아오는 로직 추가

  // reply 하는 경우 messageId 받아오는 로직 추가

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

  return (
    <>
      <section style={{ height: 'calc(80vh - 260px)' }}>
        임시컨테이너
        <button onClick={onClickReply}>임시reply버튼</button>
      </section>
      <section className="message-input">
        <div className="message-input__textarea">
          <textarea
            name="message"
            id="message"
            placeholder="메세지를 입력해주세요 ✍🏻"
            onChange={onChangeInput}
            value={message}
          ></textarea>
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
