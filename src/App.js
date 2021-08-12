import { Grid} from '@material-ui/core';
import React from 'react';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import {Menu} from './components/Menu'

function App() {
  //definir estilos generales (theme)
  return (
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
  );
}

export default App;
