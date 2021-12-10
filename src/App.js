import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';



// we can call other components inside a component eq..    import BodyComponent from './components/Body/Body';      <HeaderComponent />
function App() {
  return (
    <div className="App">

          <HeaderComponent />
          <FooterComponent />
    </div>
  );
}

export default App;
