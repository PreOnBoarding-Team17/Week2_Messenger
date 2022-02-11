import React, { useState } from 'react';
import 'Components/MessageInput/scss/MessageInput.scss';

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');
  const [isReply, setIsReply] = useState<boolean>(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const onClickSend = (): void => {
    console.log(message);
    setMessage('');
  };

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
        >
          보내기
        </button>
      </section>
    </>
  );
};

export default MessageInput;
