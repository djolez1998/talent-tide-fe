import axiosInstance from '../../../axiosClient'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const CandidatePreview = () => {
  const params = useParams()

  const { candidateId } = params

  const { isPending, error, data } = useQuery({
    queryKey: ['candidate'],
    queryFn: () =>
      axiosInstance.get(`/candidates/${candidateId}`).then(({ data }) => data)
  })

  if (isPending) return <div>Loading candidate info</div>

  if (error) return <div>Something went wrong</div>

  if (!data.candidate) return <div>Candidate does not exist</div>

  const { firstName, lastName } = data.candidate

  return (
    <div>
      <div>
        {firstName} {lastName}
      </div>
    </div>
  )
}

export default CandidatePreview
