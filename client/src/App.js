import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail'
import PostVideogame from './components/PostVideogame';


function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/videogame/:id' component={Detail} />
          <Route exact path='/postvideogame' component={PostVideogame} />
        </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
