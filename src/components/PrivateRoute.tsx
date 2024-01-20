import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const authed = localStorage.getItem('isAuth')

  return authed ? children : <Navigate to='/Home' />
}

export { PrivateRoute }
