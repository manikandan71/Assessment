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
      <Grid item xs={1.7} sm={1.7} lg={0.6} md={0.6}> 
        <SideBar/>
      </Grid>
      <Grid item xs={10.3} sm={10.3} lg={11.4} md={11.4}>
        <MainComponent/>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
