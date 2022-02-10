import './App.css';
import './style.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import HomePage from './pages/HomePage';
import CricketPage from './pages/CricketPage';
import MoviePage from './pages/MoviePage';
import DetailPage from './pages/DetailPage';
import Error from './components/Error';
import {Route, Switch } from 'react-router-dom';
import BookNow from './pages/BookNow';
import NFT from "./components/NFT"
function App() {
  return(
    <main>
      <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/cricket' component={CricketPage} />
      <Route path='/movies' component={MoviePage} />
      <Route path='/detail' component={DetailPage} />
      <Route path='/booking' component={BookNow} />
      <Route component={Error} />
      </Switch>
    </main>
  )
}

export default App;
