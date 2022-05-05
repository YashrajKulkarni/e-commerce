import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import CarouselSlider from './components/Carousel/CarouselSlider';
import { CarouselData } from './components/Carousel/CarouselData';
function App() {
  return (
    <div>
      <Navbar />
      <CarouselSlider slides={CarouselData}/>
      <div><strong>Yahsjasasfasfaasfasfasfafasfafafsafasfasfasf</strong></div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
