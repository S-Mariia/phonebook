import { lazy, Suspense } from 'react';

import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import RestrictedRoute from 'shared/components/RestrictedRoute';
import PrivateRoute from 'shared/components/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'shared/components/Loader/Loader';
import SharedLayout from './shared/components/SharedLayout/SharedLayout';
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<SignUpPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default UserRoutes;
