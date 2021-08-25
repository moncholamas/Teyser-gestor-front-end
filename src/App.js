import { Grid} from '@material-ui/core';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Menu } from './components/Menu/Menu'
import { AuthProvider } from './context';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  //definir estilos generales (theme)
  return (
    <AuthProvider>
      <Router>
        <div className="App">
            <Grid container  >
              <Grid item xs={2}>
                <Menu />
              </Grid>
              <Grid item xs={10}>
                <Main></Main>
              </Grid>
            </Grid>
            <Footer></Footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
