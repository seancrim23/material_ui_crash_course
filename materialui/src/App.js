import { Outlet, useLocation } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location])

  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
