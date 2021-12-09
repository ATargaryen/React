import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import BodyComponent from './components/Body/Body';


// we can call other components inside a component eq..    import BodyComponent from './components/Body/Body';      <HeaderComponent />
function App() {
  return (
    <div className="App">

         
          <HeaderComponent />
          <BodyComponent />
          <FooterComponent />
    </div>
  );
}

export default App;
