import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Message from 'Components/MessageList/Message';
import { DataInterface, MessageInterface } from 'Utils/Interface';
import 'Components/MessageList/scss/MessageList.scss';
import { ReplyDataInterface } from 'Utils/Interface';

interface MessageListProps {
  setReplyData: (data: ReplyDataInterface) => void;
}

const MessageList: React.FC<MessageListProps> = ({ setReplyData }) => {
  const allMessages = useSelector((state: DataInterface) => state.allMessages);
  allMessages.sort((a, b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  const user = useSelector((state: DataInterface) => state.user);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [allMessages]);

  return (
    <section className="messageList">
      {allMessages.map((message: MessageInterface) => (
        <Message
          key={message.id}
          message={message}
          host={user}
          setReplyData={setReplyData}
        />
      ))}
      <div ref={messagesEndRef}></div>
    </section>
  );
};

export default MessageList;
