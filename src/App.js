
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import { Advice } from './components/Advice';

function App() {
  return (
    <Router>
    <Switch>
   <Route exact path="/" >
   <Home />
   </Route>
   <Route exact path="/advice" >
     <Advice />
   </Route>
    </Switch>
    </Router>
    
  );
}

export default App;
