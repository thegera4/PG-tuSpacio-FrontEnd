import './App.css';
import { ThemeProvider } from '@material-ui/core'
import { Routes, Route } from 'react-router-dom';
import theme from './ThemeConfig'
import Dashboard from './Components/Dashboard/Dashboard';
import MainRoutes from './MainRoutes';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes >
        <Route path="*" element={ <MainRoutes /> } />
        <Route exact path="/dashboard" element={ <Dashboard /> } />
      </Routes>  
    </ThemeProvider>
  );
}

export default App;