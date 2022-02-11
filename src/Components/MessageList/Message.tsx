import React from 'react';
import { MessageInterface, UserInterface } from 'Utils/Interface';
import { ReplyDataInterface } from 'Utils/Interface';
import 'Components/MessageList/scss/Message.scss';
import Delete from 'Assets/Delete.png';
import Reply from 'Assets/Reply.png';

interface MessageProps {
  host: UserInterface | null;
  message: MessageInterface;
  setReplyData: (data: ReplyDataInterface) => void;
}

const Message: React.FC<MessageProps> = ({ message, host, setReplyData }) => {
  const { id, user, content, date, reply } = message;
  console.log(reply);

  const isHost = user.userId && user.userId === host?.userId ? true : false;

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  console.log(content);

  const handleReply = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const data: ReplyDataInterface = {
      id,
      userName: user.userName,
      message: content,
    };
    setReplyData(data);
  };

  return (
    <div className={'message' + (isHost ? ' host' : '')}>
      <div className="message__profile">
        <img
          className="message__profile--img"
          src={user.profileImage}
          alt="profile"
        />
        <div className="message__profile--header">
          <div className="message__profile--header-name">
            {user.userName}
            {isHost && '* '}
          </div>
          <div className="message__profile--header-date"> {date}</div>
        </div>
      </div>
      <div className="message__content">{content}</div>
      <div className="message__btn">
        {isHost && (
          <button type="button" onClick={handleDelete}>
            <img src={Delete} alt="delete" />
          </button>
        )}
        <button type="button" onClick={handleReply}>
          <img src={Reply} alt="reply" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Message);
