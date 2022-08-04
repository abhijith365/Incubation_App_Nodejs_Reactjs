import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/AuthRouter';
import Home from './components/Home';
import UserForm from './components/UserForm';
import SignIn from './components/UserLogin';
import SignUp from './components/UserSignUp';

// import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>

          <Route path={'/'} element={<UserForm />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/login'} element={<SignIn />} />

        </Routes>

      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
