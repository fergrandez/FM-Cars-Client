import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home/home';
import { Footer } from './components/footer';
import { Inventory } from './pages/inventory/inventory';
import { Test } from './pages/test/test';
import { About } from './pages/about/about';
import { CarFinder } from './pages/carFinder/carFinder';
import { Bookings } from './pages/bookings/bookings';
import { SellCar } from './pages/sellCar/sellCar';
import { CarDetails } from './pages/carDetails/carDetails';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
  
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/inventory' element={<Test />} />
          <Route path='/about' element={<About />} />
          <Route path='/carFinder' element={<CarFinder />} />
          <Route path='/booking' element={<Bookings />} />
          <Route path='/sellCar' element={<SellCar />} />
          <Route path='/carDetails/:id' element={<CarDetails />} />
        </Routes>

        <Footer />
      </Router> */}
      <Navbar />
  
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/inventory' element={<Test />} />
        <Route path='/about' element={<About />} />
        <Route path='/carFinder' element={<CarFinder />} />
        <Route path='/booking' element={<Bookings />} />
        <Route path='/sellCar' element={<SellCar />} />
        <Route path='/carDetails/:id' element={<CarDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
