import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog.js';
import Blog from './Blog.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/create'><CreateBlog /></Route>
            <Route path='/blogs/:id'><Blog /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
