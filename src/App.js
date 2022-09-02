import './App.css';
import { Container } from '@material-ui/core'
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Detail from './Components/Detail/Detail';
import ContainerCards from './Components/ContainerCards/ContainerCards.jsx'
import { Routes, Route } from 'react-router-dom';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import Wishlist from './Components/Wishlist/Wishlist'
import Profile from './Components/Profile/Profile';

function App() {

  return (
    <Container maxWidth='xl' disableGutters='true' style={{ backgroundColor: '#c8e6c9' }} >
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <ContainerCards /> } /> 
        <Route path="/:id" element={ <Detail /> } />
        <Route path="/create" element={ <CreateProduct /> } />
        <Route path="/wishlist" element={ <Wishlist /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>  
      <Footer />  
    </Container>
  );
}



export default App;