import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './pages/home'
import Login from './pages/login'
import NotFound from './pages/notFound'
import { CandidatesList, CandidatePreview } from './pages/candidates'

import { PrivateRoute } from './components/PrivateRoute'

const queryClient = new QueryClient()

function App() {
  const isAuthorized = localStorage.getItem('isAuth')
  console.log(isAuthorized, '- isAuthorized')
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route
            path='/login'
            element={isAuthorized ? <Navigate to='/candidates' /> : <Login />}
          />

          <Route
            path='/candidates'
            element={
              <PrivateRoute>
                <CandidatesList />
              </PrivateRoute>
            }
          />

          <Route
            path='/candidates/:candidateId'
            element={
              <PrivateRoute>
                <CandidatePreview />
              </PrivateRoute>
            }
          />

          {/* <Route path='/candidates' element={<PrivateRoute />}>
            <Route path='/candidates' element={<CandidatesList />} />
          </Route> */}
          {/* <PrivateRoute path='/candidates' element={<CandidatesList />} />
          <PrivateRoute
            path='/candidates/:candidateId'
            element={<CandidatePreview />}
          /> */}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
