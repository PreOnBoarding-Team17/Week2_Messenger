import React from 'react';
import Button from 'Components/Common/Button';
import 'Components/MessengerHeader/scss/MessengerHeader.scss';
import LogoImage from 'Assets/Logo.png';

const MessengerHeader = () => {
  const onClickLogout = () => {
    console.log('Logout');
  };

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
