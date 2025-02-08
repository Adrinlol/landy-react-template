import { Route, Redirect } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';

interface AdminRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const AdminRoute = ({ component: Component, ...rest }: AdminRouteProps) => {
  const { user, loading } = useFirebase();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute; 