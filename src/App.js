import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
//import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = React.lazy(() => import('./components/About'))


function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<React.Suspense fallback='Loading page...'> <LazyAbout /> </React.Suspense>} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />}>
            {/* Index Route  */}
            <Route index element={<FeaturedProducts />} ></Route>

            {/* Nested Routes  */}
            <Route path='featured' element={<FeaturedProducts />}></Route>
            <Route path='new' element={<NewProducts />}></Route>
          </Route>
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} ></Route>
            <Route path='users/admin' element={<Admin />} ></Route>
          </Route>
          <Route path='profile' element={ <RequireAuth><Profile /></RequireAuth>}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>

  );
}

export default App;
