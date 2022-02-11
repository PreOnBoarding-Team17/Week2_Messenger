import React from 'react';
import MessengerHeader from 'Components/MessengerHeader';
import MessageList from 'Components/MessageList';
import MessageInput from 'Components/MessageInput';
import MessengerLogin from 'Components/MessengerLogin';
import { useSelector } from 'react-redux';
import { ModalInterface } from 'Utils/Interface';
import 'Pages/scss/MessengerContainer.scss';

const MessengerContainer = () => {
  const modal = useSelector((state: ModalInterface) => state.modals);
  return (
    <main className="messenger-container">
      <MessengerHeader />
      <MessageList />
      <MessageInput />
      {modal.showModal && <MessengerLogin />}
    </main>
  );
};

export default MessengerContainer;
