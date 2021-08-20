import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/homepage'
import ProductPage from './pages/productpage'

function App() {
  return (
  <Router>
  <Header></Header>
  <main>
    <Container>
    <Route path='/' component={HomePage} exact></Route>
    <Route path='/product/:id' component={ProductPage}></Route>
    </Container>
  </main>
  <Footer></Footer>
  </Router>
  );
}

export default App;
