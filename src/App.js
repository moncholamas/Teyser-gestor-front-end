import React from 'react';
import  MiniDrawer from './components/Drawer/Drawer';
import { AuthProvider } from './context';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {

  //definir estilos generales (theme)
  return (
    <AuthProvider>
      <Router>
        <div className="App">
            <MiniDrawer></MiniDrawer
            >
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
