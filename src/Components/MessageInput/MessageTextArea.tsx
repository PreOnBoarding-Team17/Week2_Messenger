import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyEnter: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const MessageTextArea: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onKeyEnter,
}) => {
  return (
    <textarea
      name="message"
      id="message"
      placeholder="메세지를 입력해주세요 ✍🏻"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyEnter}
    />
  );
};

export default MessageTextArea;
