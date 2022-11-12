import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Contact  from './components/pages/Contact/Contact';
import Homepage from './Pages/Homepage/Homepage';
import Notfound from './Pages/notfound/NotFound';


function App() {

  return (
    <div className="App">
  <BrowserRouter>
                <Routes>
                  
                    <Route path="/" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
