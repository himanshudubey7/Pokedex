import { Link } from 'react-router-dom';
import './App.css';
import CustomRoutes from './Routes/CustomRoutes';
  

function App() {
 

  return (
  <div className='outer-pokedex'>
  <div className="background-circle"></div>
     <h1  id='pokedex-heading'>
      <Link to ="/">  Pokedex</Link>
    
      </h1> 
     <CustomRoutes/>
  </div>
  )
}

export default App;
