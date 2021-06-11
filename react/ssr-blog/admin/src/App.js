// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import System from './pages/system';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/system" component={System} />
      </Switch>
    </Router>
  );
}

export default App;
