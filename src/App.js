//import logo_main from './log_logo_new.png';
import './App.css';

import Pricing from './Pricing.js';
import LogFacts from './logs.js';
import HeaderLinks from './header.js';
import Contact from './contact.js';

function App() {
  return (
    <div className="App">
      <header style={{
        backgroundColor: '#432910',
        height: '5vh', 
        width: '100%'
      }}>
      <HeaderLinks/>
      </header>
      <div className="h-32 bg-[#f5e6d3] bg-opacity-90 p-4">

        <div style={{
          display: 'inline-block',
          justifyContent: "center"
        }}>
            <Pricing/>
        </div>
        <Contact/>

        <LogFacts/>
      </div>
    </div>
  );
}

export default App;
