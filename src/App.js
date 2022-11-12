import './App.css';
import { Route, Routes } from 'react-router-dom';

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Homepage from './Pages/Homepage';
import SingleProfile from './Pages/SingleProfile';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/singleProfile" element={<SingleProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
