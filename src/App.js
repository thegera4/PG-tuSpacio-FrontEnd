import './App.css';
import { Box, Container, ThemeProvider } from '@material-ui/core'
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Detail from './Components/Detail/Detail';
import DetailService from './Components/DetailService/DetailService';
import ContainerCards from './Components/ContainerCards/ContainerCards.jsx'
import { Routes, Route } from 'react-router-dom';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import Wishlist from './Components/Wishlist/Wishlist'
import Cart from './Components/Cart/Cart'
import Profile from './Components/Profile/Profile';
import theme from './ThemeConfig'
import Checkout from './Components/Checkout/Checkout';
import OrderDetail from './Components/OrderDetail/OrderDetail.jsx';
import CreateUser from './Components/CreateUser/CreateUser.jsx';
import CheckoutSuccess from './Components/Checkout/CheckoutSuccess';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' disableGutters={true} style={{ backgroundColor: '#c8e6c9' }} >
        <Navbar />
        <Box pt={4}>
          <Routes>
            <Route path="/" exact element={ <ContainerCards /> } /> 
            <Route path="/:id" element={ <Detail /> } />
            <Route path="/service" element={ <DetailService /> } />
            <Route path="/createUser" element={ <CreateUser /> } />
            <Route path="/create" element={ <CreateProduct /> } />
            <Route path="/wishlist" element={ <Wishlist /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/checkout/success" element={ <CheckoutSuccess /> } />
            <Route path="/checkout" element={ <Checkout /> } />
            <Route path="/orders/:id" element={ <OrderDetail /> } />
          </Routes>  
        </Box>
        <Footer />  
      </Container>
    </ThemeProvider>
  );
}

export default App;