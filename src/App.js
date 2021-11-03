import { BrowserRouter as Navigation, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Navigation>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Container />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Container />
          </Route>
        </Switch>
      </Navigation>
    </div>
  );
}

export default App;
