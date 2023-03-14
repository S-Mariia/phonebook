import { lazy, Suspense } from 'react';

import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import RestrictedRoute from 'shared/components/RestrictedRoute';
import PrivateRoute from 'shared/components/PrivateRoute';

import SharedLayout from './shared/components/SharedLayout/SharedLayout';
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>HomePage</div>} />
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
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
