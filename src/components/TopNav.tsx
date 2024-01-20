import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface TopNavProps {
  username: string // Assuming you have a user object with a username property
  onLogout: () => void
}

const TopNav: React.FC<TopNavProps> = ({ username, onLogout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Perform any necessary cleanup or logout logic
    // For now, just call the provided onLogout function
    onLogout()
    // Redirect to the login page or any other desired location
    navigate('/login')
  }

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='flex items-center justify-between'>
        <div className='text-white text-lg font-bold'>
          <Link to='/candidates' className='mr-4'>
            Candidates
          </Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        <div className='flex items-center'>
          <span className='text-white mr-2'>{username}</span>
          <button onClick={handleLogout} className='text-white'>
            Logout
          </button>
          {/* Add Avatar component here */}
        </div>
      </div>
    </nav>
  )
}

export default TopNav
