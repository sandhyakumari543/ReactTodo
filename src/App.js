import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './About';
import NoteState from './context/NoteState';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
          <div className="App">
            <Navbar />
            <Alert alert={alert} />
            <div className="container">
             <Home showAlert={showAlert}/>
             <About />
            </div>
          </div>
      </NoteState>
    </>
  );
}

export default App;


