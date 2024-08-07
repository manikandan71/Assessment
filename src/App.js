import logo from './logo.svg';
import './App.css';
import MainComponent from './mainComponent';
import Header from './component/header';
import { Grid } from '@mui/material';
import SideBar from './component/sidebar';

function App() {
  return (
   <div>
    <Header/>
    <Grid container>
      <Grid item xs={0.6} sm={0.6} lg={0.6} md={0.6}> 
        <SideBar/>
      </Grid>
      <Grid item xs={11.4} sm={11.4} lg={11.4} md={11.4}>
        <MainComponent/>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
