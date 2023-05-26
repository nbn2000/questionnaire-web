import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from "./pages/register";
import Navbar from "./components/navbar";
import UserInfo from "./pages/userInfo";
import Quiz from "./pages/quiz";
import ListUser from './pages/listuser';
import Admin from './pages/admin';
import ThankYou from './pages/thankyoupage';

function App() {
  const admin = localStorage.getItem('admin') === 'true';
  const user = localStorage.getItem('users');

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register />} />
          {admin ? (
            <>
              <Route path='/user-info/:user' element={<UserInfo />} />
              <Route path='/list-user' element={<ListUser />} />
              <Route path='/admin' element={<Admin />} />
            </>
          ) : user ? (
            <>
              <Route path='/' element={<Quiz />} />
              <Route path='/thank-you' element={<ThankYou />} />
            </>
          ) : (
            <>
              <Route path='/admin' element={<Navigate to='/register' />} />
              <Route path='/user-info/:user' element={<Navigate to='/register' />} />
              <Route path='/list-user' element={<Navigate to='/register' />} />
              <Route path='/' element={<Navigate to='/register' />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;