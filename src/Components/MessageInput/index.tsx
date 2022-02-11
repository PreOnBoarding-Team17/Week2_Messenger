import React, { useState } from 'react';
import 'Components/MessageInput/scss/MessageInput.scss';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onClickSend = () => {
    console.log(message);
    setMessage('');
  };

  return (
    <>
      <section style={{ height: 'calc(80vh - 260px)' }}>임시컨테이너</section>
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
