import {Typography, Grid} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import {Menu} from './components/Menu'



function App() {
  //definir estilos generales (theme)
  return (
    <div className="App">
      <Grid container  >
        <Grid item xs={2}>
          <Typography 
            variant="h5" 
            color="primary" 
            align="center"
          >
            Teyser Gestor
          </Typography>
          <Menu/>
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
