import logo from './logo.svg';
import Navbar from './components/NavBar';
import User
 from './components/User';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Navbar title="Navbar title"/>
      <User name="Ömer GÜNGÖR" phone="5327326949" mail="gungoromer@windowslive.com"/>
      <User name="Esra GÜNGÖR" phone="5079374795" mail="esra.i@windowslive.com"/>
    </div>
  );
}

export default App;
