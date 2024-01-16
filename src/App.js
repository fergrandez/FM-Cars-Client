import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';
import { Test } from './pages/inventory/inventory';
import { About } from './pages/about/about';
import { CarFinder } from './pages/carFinder/carFinder';
import { Bookings } from './pages/bookings/bookings';
import { SellCar } from './pages/sellCar/sellCar';
import { CarDetails } from './pages/carDetails/carDetails';
import { NotFound } from './pages/notFound/notFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
  
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/inventory' element={<Test />} />
          <Route path='/about' element={<About />} />
          <Route path='/carFinder' element={<CarFinder />} />
          <Route path='/booking' element={<Bookings />} />
          <Route path='/sellCar' element={<SellCar />} />
          <Route path='/carDetails/:id' element={<CarDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
