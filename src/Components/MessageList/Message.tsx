import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'Store/Actions/modals';
import { MessageInterface, UserInterface } from 'Utils/Interface';
import { ReplyDataInterface, DeleteModalDataInterface } from 'Utils/Interface';
import 'Components/MessageList/scss/Message.scss';
import Delete from 'Assets/Delete.png';
import Reply from 'Assets/Reply.png';
interface MessageProps {
  host: UserInterface | null;
  message: MessageInterface;
  setReplyData: (data: ReplyDataInterface) => void;
  setDeleteModalData: (data: DeleteModalDataInterface) => void;
}

const Message: React.FC<MessageProps> = ({
  message,
  host,
  setReplyData,
  setDeleteModalData,
}) => {
  const { id, user, content, date, reply } = message;

  const modalData: DeleteModalDataInterface = {
    id,
    message:
      (content.length >= 10 ? content.slice(0, 10) + '...' : content) +
      ' 메시지를 삭제하시겠습니까?',
  };
  const isHost = user.userId && user.userId === host?.userId ? true : false;

  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setDeleteModalData(modalData);
    dispatch(showModal(true));
  };

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
      {reply && <div className="message__reply">Reply Message</div>}
      <div
        className={
          'message__content' + (reply ? ' message__content--reply' : '')
        }
        dangerouslySetInnerHTML={{
          __html: content.replace(/\r\n|\r|\n/g, '<br />'),
        }}
      ></div>
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
