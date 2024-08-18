//import logo from './logo.svg';
import logo_main from './log_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{
        backgroundColor: 'black',
        height: '30px', // Adjust this value to make the bar smaller or larger
        width: '100%'
      }}>

      </header>
      <main>
        <div class="mainClass">
          <img src={logo_main} width="20%" alt="Main Logo"/>
          <div class="textMainClass">
            <h2 >We sell wood or something</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
