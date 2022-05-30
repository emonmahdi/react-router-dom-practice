import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Pages/Blog';
import User from './Pages/User';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<Blogs />} />
              <Route path='/blog/:title' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
              <Route path='/user' element={<User />} />
            </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App; 
