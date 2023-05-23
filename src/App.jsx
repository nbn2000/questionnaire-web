import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Register from "./pages/register";
import Navbar from "./components/navbar";
import UserInfo from "./pages/userInfo";
import Quiz from "./pages/quiz";
import ListUser from './pages/listuser';
import Admin from './pages/admin';
import ThankYou from './pages/thankyoupage';

function App() {
  const admin = localStorage.getItem('admin');
  const user = localStorage.getItem('users');

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
        <Route exact path='/register' component={Register} />
          {user ? (
            <>
              <Route exact path='/' component={Quiz} />
              <Route exact path='/thank-you' component={ThankYou}/>
              <Redirect exact from='/register' to='/' />
            </>
          ) : (
            <Redirect exact from='/' to='/register' />
          )}
          {admin ? (
            <>
              <Route exact path='/user-info/:user' component={UserInfo} />
              <Route exact path='/list-user' component={ListUser} />
              <Route exact path='/admin' component={Admin} />
              <Redirect exact from='/user-info/:user' to='/user-info/:user' />
              <Redirect exact from='/list-user' to='/list-user' />
              <Redirect exact from='/admin' to='/admin' />
            </>
          ) : (<><Redirect exact from='/admin' to='/register' />
          <Redirect exact from='/user-info/:user' to='/register' />
          <Redirect exact from='/list-user' to='/register' /></>)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;