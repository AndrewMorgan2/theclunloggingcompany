import logo_main from './log_logo.jpg';
import './App.css';

import Pricing from './Pricing.js';

function App() {
  return (
    <div className="App">
      <header style={{
        backgroundColor: '#432910',
        height: '3vh', 
        width: '100%'
      }}>
      </header>

      <div style={{
        display: 'inline-block', 
        paddingTop: '1%'
      }}>
          <img src={logo_main} width="30%" alt="Main Logo" class="mainClass"/>
          <h1 className="text-[#432910] text-center inline-flex justify-center items-center h-full text-4xl">
          We sell wood or something
          </h1>
      </div>

      <div style={{paddingTop: '1%', paddingBottom: '1%'}}>
        <Pricing/>
      </div>

      <div className='contact'>
      <h2 className="text-[#432910] text-2xl">
      Email: youknow@thisShit</h2>
      <h2 className="text-[#432910] text-2xl">
      Phone: 0121do1</h2>
      </div>
      
    </div>
  );
}

export default App;
