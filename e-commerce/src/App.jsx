import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
