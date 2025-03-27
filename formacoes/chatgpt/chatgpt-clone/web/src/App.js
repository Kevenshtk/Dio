import { useState } from 'react';

import './styles/reset.css';
import './styles/App.css';

import {makeRequest} from './api/api';
import {SideMenu} from './components/SideMenu/SideMenu';
import ChatMessage from './components/ChatMessage/ChatMessage';

function App() {
  const[input, setInpunt] = useState('');
  const[chatLog, setChatlog] = useState([{
      user: "gpt",
      message: "Como posso te ajudar hoje ?"
    }]);

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await makeRequest({prompt: input});

    response = response.data.split('\n').map(line => <p>{line}</p>)

    setChatlog([...chatLog, {
      user: 'me',
      message: `${input}`
    },
    {
      user: 'me',
      message: response
    }
    ])

    setInpunt('');
  }


  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className='chatbox'>
        <div className='chat-log'>
          {chatLog.map((message, index) =>
            <ChatMessage key={index} message={message}/>
          )}
        </div>

        <div className='chat-inpunt-holder'>
          <form onSubmit={handleSubmit}>
            <input rows='1' className='chat-input-textarea' 
            value={input} onChange={e => setInpunt(e.target.value)}/>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
