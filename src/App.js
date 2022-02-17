import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Contact from './Component/Contact'
import Support from './Component/Support'
import Team from './Component/Team'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/team' element={<Team/>}/>
      </Routes>
    </div>
  );
}

export default App;
