import React from 'react';
import MessengerHeader from 'Components/MessengerHeader';
import MessageList from 'Components/MessageList';
import MessageInput from 'Components/MessageInput';
import MessengerLogin from 'Components/MessengerLogin';
import 'Pages/scss/MessengerContainer.scss';

const MessengerContainer = () => {
  return (
    <main className="messenger-container">
      <MessengerHeader />
      <MessageList />
      <MessageInput />
    </main>
  );
};

// 700부터는 100%로!

export default MessengerContainer;
