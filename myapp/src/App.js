import logo from './logo.svg';
import './App.css';
import FullName from './profile/component/FullName';
import Bio from './profile/component/Bio';
import Profession from './profile/component/Profession';
import PropTypes from 'prop-types';
import HandleName from './profile/component/HandleName';



function App() {
 
  const handleEvent = () => {
     alert('yachmina');
    };
    return (
    
    <>
    <div className='two'>
      <h1 className='one'>Self-Profile </h1>
        <FullName firstName="Yachmina "  Name="AD">
        </FullName>
        <br/>
      <Bio FullName="yachmina" Age="26" Gender="Female" Interests="Learning,travel, Watching TV , Eating and Sleeping"  />
      <div id="profession"><Profession/></div> 
      {/* <button onClick={handleEvent}>User</button> */}
      <div>
        <HandleName handleEvent={handleEvent}/>
      </div>
      
    

      <br/>
      
      
      </div>
      </>
    );
    function ReactHeader({ version = "16" }) {
      return <h1> React {version} Documentation </h1>;
     }
  }
  export default App;
  