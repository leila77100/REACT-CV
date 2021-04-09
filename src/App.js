import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/competences" component={Knowledges} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;
