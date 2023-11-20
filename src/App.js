import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/create'><CreateBlog /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
