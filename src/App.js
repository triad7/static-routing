import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
                <Route  path='/' element={< Home />}></Route>
                <Route path='/about' element={< About />}></Route>
                <Route path='/contact' element={< Contact />}></Route>
        </Routes>
        
    </BrowserRouter>
    </div>
  );
}

export default App;
