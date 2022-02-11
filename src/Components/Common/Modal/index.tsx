import React from 'react';
import Button from 'Components/Common/Button';
import 'Components/Common/Modal/scss/Modal.scss';

interface ModalProps {
  message?: string;
  question: string;
  onSubmit: () => void;
  onClose: () => void;
}

const Modal = ({ message, question, onSubmit, onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__wrapper">
          <div className="modal__message">
            {message && <p>{message}</p>}
            <p>{question}</p>
          </div>
          <div>
            <Button style="standard border" text="예" onClick={onSubmit} />
            <Button style="standard" text="아니오" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
