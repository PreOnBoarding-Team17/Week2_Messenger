import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageTextArea: React.FC<MessageInputProps> = ({ value, onChange }) => {
  return (
    <textarea
      name="message"
      id="message"
      placeholder="메세지를 입력해주세요 ✍🏻"
      onChange={onChange}
      value={value}
    />
  );
};

export default MessageTextArea;
