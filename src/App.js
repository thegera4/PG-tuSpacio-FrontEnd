import './App.css';
import {Container} from '@material-ui/core'
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';

import SearchBar from './Components/SearchBar/SearchBar';


import Detail from './Components/Detail/Detail';
import ContainerCards from './Components/ContainerCards/ContainerCards.jsx'


function App() {

  return (
    <Container maxWidth='xl' disableGutters='true' style={{backgroundColor:'#c8e6c9'}} >
      <Navbar />
      {/* <SearchBar /> */}
      <ContainerCards />
      {/*<Footer />*/}
      {/*<Detail />*/}

      </Container>
   
  );
}

export default App;