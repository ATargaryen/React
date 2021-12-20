import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import {
  BrowserRouter as Router, 
} from "react-router-dom";



// we can call other components inside a component eq..    import BodyComponent from './components/Body/Body';      <HeaderComponent />
function App() {
  return (
    <div className="App">
        <Router>
          <HeaderComponent />
          <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
