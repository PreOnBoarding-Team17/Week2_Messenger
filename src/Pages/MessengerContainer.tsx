import React, { useState } from 'react';

import MessengerHeader from 'Components/MessengerHeader';
import MessageList from 'Components/MessageList';
import MessageInput from 'Components/MessageInput';
import MessengerLogin from 'Components/MessengerLogin';
import { useDispatch, useSelector } from 'react-redux';
import 'Pages/scss/MessengerContainer.scss';
import { ReplyDataInterface, DeleteModalDataInterface } from 'Utils/Interface';
import { RootStateType } from 'Store/Reducers';
import { ModalStateType } from 'Store/Reducers/modals';
import Modal from 'Components/Common/Modal';
import { deleteMessage } from 'Store/Actions/message';
import { closeModal } from 'Store/Actions/modals';

const MessengerContainer = () => {
  const modal: ModalStateType = useSelector(
    (state: RootStateType) => state.modals
  );
  const userData = useSelector((state: RootStateType) => state.message.user);

  const dispatch = useDispatch();

  const [replyData, setReplyData] = useState<ReplyDataInterface>({
    id: 0,
    userName: '',
    message: '',
  });

  const [deleteModalData, setDeleteModalData] = useState<
    DeleteModalDataInterface
  >({
    id: 0,
    message: '',
  });

  const handleClose = () => {
    dispatch(closeModal(true));
  };

  const handleDelete = () => {
    dispatch(deleteMessage(deleteModalData.id));
    handleClose();
  };

  return (
    <main className="messenger-container">
      <MessengerHeader userId={userData?.userId} />
      <MessageList
        setReplyData={setReplyData}
        setDeleteModalData={setDeleteModalData}
      />
      <MessageInput replyData={replyData} userId={userData?.userId} />
      {!userData && modal.showModal && <MessengerLogin />}
      {userData && modal.showModal && (
        <Modal
          type="delete"
          question="메세지를 삭제하시겠습니까?"
          message={deleteModalData.message}
          onSubmit={handleDelete}
          onClose={handleClose}
        />
      )}
    </main>
  );
};

export default MessengerContainer;
