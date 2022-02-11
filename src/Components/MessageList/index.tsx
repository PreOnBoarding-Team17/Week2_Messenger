import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePrevious } from 'Utils/Hooks/UsePrevious';
import { MessageInterface } from 'Utils/Interface';
import { ReplyDataInterface } from 'Utils/Interface';
import Message from 'Components/MessageList/Message';
import { RootStateType } from 'Store/Reducers';
import { ModalStateType } from 'Store/Reducers/modals';
import 'Components/MessageList/scss/MessageList.scss';

interface MessageListProps {
  setReplyData: (data: ReplyDataInterface) => void;
}

const MessageList: React.FC<MessageListProps> = ({ setReplyData }) => {
  const allMessages: MessageInterface[] = useSelector(
    (state: RootStateType) => state.message.allMessages
  );

  allMessages &&
    allMessages.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });

  const user = useSelector((state: RootStateType) => state.message.user);

  const modal: ModalStateType = useSelector(
    (state: RootStateType) => state.modals
  );

  const prevAllMessagesLen = usePrevious<number>(allMessages.length);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    prevAllMessagesLen &&
      prevAllMessagesLen < allMessages.length &&
      messagesEndRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
  }, [allMessages]);

  return (
    <section className="message-list">
      {allMessages &&
        allMessages.map((message: MessageInterface) => (
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
