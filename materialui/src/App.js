import { Outlet } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
