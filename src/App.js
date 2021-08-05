import {Button} from '@material-ui/core';
import React, {useState} from 'react';
import MiniDrawer from './components/Drawer';




function App() {
  const [clientes,setClientes]=useState(0);
  const clickeado = function (){
    setClientes(clientes + 1);

  }
  
  return (
    <div className="App">
      
     
      <MiniDrawer>
        <Button color="primary" variant="contained" onClick={clickeado}>
          Hola Mundo!
        </Button>
        <h1>Clicks que diste {clientes}</h1>
      </MiniDrawer>

    </div>
  );
}

export default App;
