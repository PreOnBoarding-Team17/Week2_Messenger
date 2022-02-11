import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePrevious } from 'Utils/Hooks/UsePrevious';
import { MessageInterface, UserInterface } from 'Utils/Interface';
import { ReplyDataInterface, DeleteModalDataInterface } from 'Utils/Interface';
import Message from 'Components/MessageList/Message';
import { RootStateType } from 'Store/Reducers';
import 'Components/MessageList/scss/MessageList.scss';
interface MessageListProps {
  setReplyData: (data: ReplyDataInterface) => void;
  setDeleteModalData: (data: DeleteModalDataInterface) => void;
}

const MessageList: React.FC<MessageListProps> = ({
  setReplyData,
  setDeleteModalData,
}) => {
  const allMessages: MessageInterface[] = useSelector(
    (state: RootStateType) => state.message.allMessages
  );

  allMessages &&
    allMessages.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });

  const user: UserInterface | null = useSelector(
    (state: RootStateType) => state.message.user
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
            setDeleteModalData={setDeleteModalData}
          />
        ))}
      <div ref={messagesEndRef}></div>
    </section>
  );
};

export default MessageList;
