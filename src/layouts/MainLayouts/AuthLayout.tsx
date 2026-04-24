import { Outlet } from 'react-router-dom';

//layout для LoginPage  (без header и футер)
 function AuthLayout() {
  return (
    <div className="auth-layout flex justify-center  items-center ">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
