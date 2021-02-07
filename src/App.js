import NavBar from './components/navbar'; 
import Footer from './components/footer';
import Home from './pages/Home/home';
import './App.css';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import group from './assets/Group.svg';
const StickyFooter = styled.div`
  position: fixed;
  bottom: 0px;
  height: 50px;
  width: 100%;
  background-color: #5B22C6;
  color: #fff;
  padding: 10px 0;
`
const StickyImg = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px;
  background-color:#5B22C6;
  border-radius: 8px;
  z-index: 5;
`

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
      <StickyFooter>
        <Typography align="center"><b>Adapting to a membership-first revenue model for publications </b>— An in-depth chat with Zetland's CEO, Tav Klitgaard.<b>Save your free spot</b> ➡ </Typography>
      </StickyFooter>
      <StickyImg>
        <img src={group} alt='' style={{height: '40px'}}/>
      </StickyImg>
    </div>
  );
}

export default App;
