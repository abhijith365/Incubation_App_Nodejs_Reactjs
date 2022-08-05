import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookingSloat from './components/Admin/BookingSloat';
import AdminSignIn from './components/AdminLogin';
import ApplicationList from './components/ApplicationList';
import { AuthProvider } from './components/AuthRouter';
import RequireAdminAuth from './components/RequireAdminAuth';
import RequireAuth from './components/RequireAuth';
import SignIn from './components/UserLogin';
import SignUp from './components/UserSignUp';

// import { Home } from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>

          <Route path={'/'} element={<RequireAuth />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/login'} element={<RequireAdminAuth />} />
          <Route path={'/admin'} element={<RequireAdminAuth />} >
            <Route index path='application' element={<ApplicationList />} />
            <Route path='bookingSlot' element={<BookingSloat />} />
          </Route>
          <Route path={'/admin/login'} element={<AdminSignIn />} />
          <Route path='/admin/app' element={<ApplicationList />} />


        </Routes>

      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
