import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import SharedLayout from './shared/components/SharedLayout/SharedLayout';
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>HomePage</div>} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<div>Log in</div>} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
