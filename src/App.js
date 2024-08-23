import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Ourteachers from "./Our teachers";
import Home from "./Home";
import './Contact.css';
import './Home.css';
import './App.css';
import './Teacher.css';
import './Our.css'



function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route index element={<Courses />} />
          <Route path ="/About" element={<About />} />
          <Route path ="/Contact" element={<Contact />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path ="/Ourteachers" element={<Ourteachers />} />
          <Route path ="/Home" element={<Home />} />
          </Routes>
          </BrowserRouter>
      </div>
    
  );
}
export default App;
