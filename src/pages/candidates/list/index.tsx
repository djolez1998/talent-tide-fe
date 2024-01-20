import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import axiosInstance from '../../../axiosClient'
import { useQuery } from '@tanstack/react-query'

import logo from '../../../images/logo2.jpg'

type Person = {
  id: number
  firstName: string
  lastName: string
}

const Candidates = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['candidates'],
    queryFn: () => axiosInstance.get('/candidates').then(({ data }) => data)
  })

  const onLogout = () => {}

  const username = 'zhole'

  if (isPending) return <div>Loading...</div>

  if (error) return <div>Something went wrong</div>

  return (
    <div>
      <AppBar position='static'>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <img width={200} height={50} src={logo} alt='logo' />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              <Link to='/candidates'>Candidates</Link>
            </Typography>
          </div>

          <Avatar>{username.charAt(0)}</Avatar>
        </Toolbar>
      </AppBar>
      {!!data.candidates?.length
        ? data.candidates.map((item: Person) => (
            <div key={item.id}>
              {item?.firstName} {item?.lastName}
            </div>
          ))
        : 'Table is empty'}
    </div>
  )
}

export default Candidates
