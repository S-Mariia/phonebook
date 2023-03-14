import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from 'redux/auth/auth-selectors';

import { refreshUser } from 'redux/auth/auth-operations';
import UserRoutes from './UserRoutes';

import Loader from 'shared/components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{isRefreshing ? <Loader /> : <UserRoutes />}</>;
};
