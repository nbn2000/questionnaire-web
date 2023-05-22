import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Register from "./pages/register";
import Navbar from "./components/navbar";
import UserInfo from "./pages/userInfo";
import Quiz from "./pages/quiz";
import ListUser from './pages/listuser';
import Admin from './pages/admin';

function App() {
  const admin = localStorage.getItem('admin');
  const user = localStorage.getItem('users');

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          {user ? (
            <>
              <Route exact path='/' component={Quiz} />
              <Redirect exact from='/register' to='/' />
              <Route exact path='/register' component={Register} />
            </>
          ) : (
            <Redirect exact from='/' to='/register' />
          )}
          {admin && (
            <>
              <Route exact path='/register' component={Register} />
              <Route exact path='/user-info/:user' component={UserInfo} />
              <Route exact path='/list-user' component={ListUser} />
              <Route exact path='/admin' component={Admin} />
              <Redirect exact from='/user-info' to='/user-info' />
              <Redirect exact from='/list-user' to='/list-user' />
              <Redirect exact from='/admin' to='/admin' />
            </>
          )}
          <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;