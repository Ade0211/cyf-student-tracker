import './App.css';
import Header from './components/Header/Header';
import Front from './pages/Front/Front';
import {Route} from 'react-router-dom';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Header />
    
      <Route path='/login' component={Login} />
      <Route path='/front' component={Front} />
    </div>
  );
}

export default App;
