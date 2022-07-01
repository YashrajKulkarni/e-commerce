import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
