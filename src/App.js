import './App.css';
import Header from './components/Header/Header';
import Front from './pages/Front/Front';
import {Route,Switch,Link} from 'react-router-dom';
import Login from './pages/Login/Login';
import StudentTracker from './pages/StudentTracker/StudentTracker';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <ul>
  <li><Link to="/login">{}</Link></li>
      </ul> */}
    <Switch>
      <Route exact path='/' component={Front} />
      <Route path='/login' component={Login} />
      <Route path='/student-tracker' component={StudentTracker} />
      </Switch>
    </div>
  );
}

export default App;
