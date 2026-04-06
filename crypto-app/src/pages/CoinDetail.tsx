// this must show detailed information about a single cryptocurrency

import { useParams, useNavigate } from 'react-router-dom'

function CoinDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>{id}</h1>
      <p>Loading coin details...</p>
    </div>
  )
}

export default CoinDetail
