import React , { useEffect , useState } from 'react'
import './App.css';
import Mycomponent from './Component/Mycomponent';


function App() {

  const [ visibleComp , setVisibleComp ] = useState(true);
  useEffect (() => {
    console.log('app is monting.....')
  } , [] )

  return (
    <div className="App">
      {visibleComp ? <Mycomponent /> : <></> } 
      <button onClick={() => setVisibleComp(!visibleComp)} >Toggle</button>
    </div>
  );
}

export default App;
