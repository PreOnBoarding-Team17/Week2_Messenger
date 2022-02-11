import React, { useCallback, useState } from 'react';
import { closeModal } from 'Store/Actions/modals';
import { loginUser } from 'Store/Actions/message';
import { useDispatch } from 'react-redux';
import Button from 'Components/Common/Button';
import 'Components/MessengerLogin/scss/MessengerLogin.scss';

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
    <div className="modal">
      <div className="modal__container">
        <div className="login">
          <p className="login__message">사용할 닉네임을 입력해주세요.</p>
          <input
            className="login__input"
            type="text"
            onChange={onChangeInput}
          />
          <Button style="standard" text="확인" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default MessengerLogin;
