import React, { useCallback, useState } from 'react';
import 'Utils/Styles/_reset.scss';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'Store/Actions';
import 'App.scss';

const App = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    dispatch(sendMessage(3, input));
  }, [dispatch, input]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <input type="text" onChange={onChangeInput} />
        <button onClick={onSubmit}>로그인</button>
      </div>
      <div>
        <input type="text" />
        <button>메세지</button>
      </div>
    </div>
  );
};

export default App;
