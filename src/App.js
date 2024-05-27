import './App.css';
import Banner from './components/banner/Banner';
import { Footer } from './components/footer/Footer';
import Courses from './components/market/market';
import Navbar from './components/navbar/navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
