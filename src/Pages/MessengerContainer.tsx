import React, { useState } from 'react';
import MessengerHeader from 'Components/MessengerHeader';
import MessageList from 'Components/MessageList';
import MessageInput from 'Components/MessageInput';
import MessengerLogin from 'Components/MessengerLogin';
import { useSelector } from 'react-redux';
import { ModalInterface } from 'Utils/Interface';
import 'Pages/scss/MessengerContainer.scss';
import { ReplyDataInterface } from 'Utils/Interface';

const MessengerContainer = () => {
  const modal = useSelector((state: ModalInterface) => state.modals);

  const [replyData, setReplyData] = useState<ReplyDataInterface>({
    id: 0,
    userName: '',
    message: '',
  });
  return (
    <main className="messenger-container">
      <MessengerHeader />
      <MessageList setReplyData={setReplyData} />
      <MessageInput replyData={replyData} />
      {modal.showModal && <MessengerLogin />}
    </main>
  );
};

export default MessengerContainer;
