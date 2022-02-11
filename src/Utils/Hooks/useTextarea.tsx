import { useState } from 'react';

const useTextarea = () => {
  const [message, setMessage] = useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  return {
    message,
    setMessage,
    onChangeInput,
  };
};

export default useTextarea;
