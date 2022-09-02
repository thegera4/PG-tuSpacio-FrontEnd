import './App.css';
import { Container } from '@material-ui/core'
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Detail from './Components/Detail/Detail';
import ContainerCards from './Components/ContainerCards/ContainerCards.jsx'
import { Routes, Route } from 'react-router-dom';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import Wishlist from './Components/Wishlist/Wishlist'
import Cart from './Components/Cart/Cart'
import Profile from './Components/Profile/Profile';
import Checkout from './Components/Checkout/Checkout';


function App() {

  return (
    <Container maxWidth='xl' disableGutters='true' style={{ backgroundColor: '#c8e6c9' }} >
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <ContainerCards /> } /> 
        <Route path="/:id" element={ <Detail /> } />
        <Route path="/create" element={ <CreateProduct /> } />
        <Route path="/wishlist" element={ <Wishlist /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Routes>  
      <Footer />  
    </Container>
  );
}



export default App;