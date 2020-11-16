import './App.css';
import Header from './components/Header/Header';
import Front from './pages/Front/Front';
import {Route,Switch} from 'react-router-dom';
import Login from './pages/Login/Login';
import StudentTracker from './pages/StudentTracker/StudentTracker';


function App() {
  return (
    <div className="App">
      <Header />
    <Switch>
      <Route path='/front' component={Front} />
      <Route path='/login' component={Login} />
      <Route path='/student-tracker' component={StudentTracker} />
      </Switch>
    </div>
  );
}

export default App;
