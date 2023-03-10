
import './App.css';
import Start from './Components/Start';
import Contact from './Components/Contact';
import Main from './Components/Main';
import { Route,Routes } from 'react-router';


function App() {
  return (
    <div className="Container">
      <Start/>
      <Routes>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Main" element={<Main/>}/>     
      </Routes>
    </div>
  );
}

export default App;
