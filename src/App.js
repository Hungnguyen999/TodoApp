import logo from './logo.svg';
import './Header/Header';
import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Clock from './Clock/Clock';
function App() {
  return (
    <div>
      <div className="App">
          <header class="container" className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
      </div>
      <Header  />
      <Clock date={new Date()} />,
      <Content />
      <Footer />
    </div>
    
  );
}

export default App;
