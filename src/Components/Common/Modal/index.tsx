import React from 'react';
import Button from 'Components/Common/Button';
import 'Components/Common/Modal/scss/Modal.scss';

interface ModalProps {
  question: string;
  type: string;
  message?: string;
  onSubmit: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose?: () => void;
}

const Modal = ({
  message,
  question,
  type,
  onChange,
  onSubmit,
  onClose,
}: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__container">
        {type === 'login' ? (
          <div className="login">
            <p className="login__message">사용할 닉네임을 입력해주세요.</p>
            {onChange && (
              <input className="login__input" type="text" onChange={onChange} />
            )}
            <Button style="standard" text="확인" onClick={onSubmit} />
          </div>
        ) : (
          <div className="modal__wrapper">
            <div className="modal__message">
              {message && <p>{message}</p>}
              <p>{question}</p>
            </div>
            <div>
              {onSubmit && (
                <Button style="standard border" text="예" onClick={onSubmit} />
              )}
              {onClose && (
                <Button style="standard" text="아니오" onClick={onClose} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
