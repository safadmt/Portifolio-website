
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact_me from './Components/Contact_me';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="aboutme" element={<About/>}/>
          <Route path="projects" element={<Project/>}/>
          <Route path="contact" element={<Contact_me/>}/>
          <Route path="skills" element={<Skills/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
