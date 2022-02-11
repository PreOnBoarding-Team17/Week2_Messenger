import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyEnter: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

const MessageTextArea: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onKeyEnter,
  textareaRef,
}) => {
  return (
    <textarea
      name="message"
      id="message"
      placeholder="메세지를 입력해주세요 ✍🏻"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyEnter}
      ref={textareaRef}
    />
  );
};

export default MessageTextArea;
