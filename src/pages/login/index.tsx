import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import axiosInstance from '../../axiosClient'

const schema = yup.object().shape({
  username: yup.string().required('Required field'),
  password: yup.string().required('Required field')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()

  const { mutate, isPending, error } = useMutation({
    mutationFn: (credentials) => {
      return axiosInstance.post('/login', credentials)
    },
    onSuccess: () => {
      localStorage.setItem('isAuth', 'true')
      navigate('/candidates')
    }
  })

  const onSubmit = (data: any) => {
    mutate(data)
  }

  if (isPending) return <div>Loading...</div>

  if (error) return <div>Something went wrong</div>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='username'>Username</label>

      <input
        id='username'
        {...register('username', { required: true, maxLength: 30 })}
      />

      {errors.username && errors.username.type === 'required' && (
        <span role='alert'>This is required</span>
      )}

      <label htmlFor='password'>Password</label>

      <input
        id='password'
        type='password'
        {...register('password', { required: true, maxLength: 30 })}
      />

      {errors.password && errors.password.type === 'required' && (
        <span role='alert'>This is required</span>
      )}

      <input type='submit' />
    </form>
  )
}

export default Login
