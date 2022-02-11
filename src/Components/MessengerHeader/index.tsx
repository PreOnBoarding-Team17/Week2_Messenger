import React from 'react';
import 'Components/MessengerHeader/scss/MessengerHeader.scss';
import LogoImage from 'Assets/Logo.png';

const MessengerHeader = () => {
  return (
    <section className="messanger-header">
      <div className="messanger-header__logo">
        <img src={LogoImage} alt="logo" />
      </div>
      <button>로그아웃</button>
    </section>
  );
};

export default MessengerHeader;
