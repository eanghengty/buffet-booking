import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Homepage from './components/Homepage';
import Myprofile from './components/Myprofile';
import Searchpage from './components/Searchpage';
import Pagedetail from './components/Pagedetail';
import Myreservation from './components/Myreservation';
import Myfavourite from './components/Myfavourite';

function App() {
  return (
    <div className="App">
      <Pagedetail/>
    </div>
  );
}

export default App;
