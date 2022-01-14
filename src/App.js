import './App.css';
import { Notification } from '@mozaic-ds/react';

function App() {
  return (
    <div className="App">
      <Notification
        isClosable
        message="Ceci est un élement en React créé à partir de Mozaic"
        onClose={() => { }}
        size="m"
        theme="info"
        title="Information notification"
      />
    </div>
  );
}

export default App;
