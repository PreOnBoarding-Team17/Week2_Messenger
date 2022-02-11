import React, { useState } from 'react';
import MessengerHeader from 'Components/MessengerHeader';
import MessageList from 'Components/MessageList';
import MessageInput from 'Components/MessageInput';
import MessengerLogin from 'Components/MessengerLogin';
import 'Pages/scss/MessengerContainer.scss';
import { ReplyDataInterface } from 'Utils/Interface';

const MessengerContainer = () => {
  const [replyData, setReplyData] = useState<ReplyDataInterface>({
    id: 0,
    userName: '',
    message: '',
  });
  // { userId, userName, message }

  // const handlerSetReplayData = (data: ReplyDataInterface) => {
  //   console.log(123);
  //   setReplyData(data);
  // };

  return (
    <main className="messenger-container">
      <MessengerHeader />
      <MessageList setReplyData={setReplyData} />
      <MessageInput replyData={replyData} />
    </main>
  );
};

// 700부터는 100%로!

export default MessengerContainer;
