import React, { useCallback, useState } from 'react';
import { closeModal } from 'Store/Actions/modals';
import { loginUser } from 'Store/Actions/message';
import { useDispatch } from 'react-redux';
import 'Components/MessengerLogin/scss/MessengerLogin.scss';
import Modal from 'Components/Common/Modal';

const MessengerLogin = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    if (!input.length) alert('닉네임을 입력해주세요.');
    else {
      dispatch(loginUser(input));
      dispatch(closeModal(false));
    }
  }, [dispatch, input]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Modal
        onChange={onChangeInput}
        onSubmit={handleClick}
        question="사용할 닉네임을 입력해주세요."
        type="login"
      />
    </>
  );
};

export default MessengerLogin;
