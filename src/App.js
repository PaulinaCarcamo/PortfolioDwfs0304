
import './assets/fonts.css'
import 'aos/dist/aos.css';

// import Banner from './layouts/Banner';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
