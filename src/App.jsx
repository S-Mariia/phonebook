import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/auth-operations';
import UserRoutes from './UserRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <UserRoutes />
    </>
  );
};
