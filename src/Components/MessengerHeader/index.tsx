import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'Components/Common/Button';
import 'Components/MessengerHeader/scss/MessengerHeader.scss';
import LogoImage from 'Assets/Logo.png';
import { logoutUser } from 'Store/Actions/message';
import { showModal } from 'Store/Actions/modals';

interface MessengerHeaderProps {
  userId: number | undefined;
}

const MessengerHeader: React.FC<MessengerHeaderProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const onClickLogout = useCallback(() => {
    if (userId) {
      dispatch(logoutUser(userId));
      dispatch(showModal(true));
    }
  }, [dispatch, userId]);

  return (
    <section className="messanger-header">
      <div className="messanger-header__logo">
        <img src={LogoImage} alt="logo" />
      </div>
      <Button style="standard" text="로그아웃" onClick={onClickLogout} />
    </section>
  );
};

export default MessengerHeader;
