// this must show the top 10 cryptocurrencies by market cap
import { useEffect, useState } from 'react'
import { getTopCoins } from '../api/coingecko'
import type { CoinSummary } from '../types/coin'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [coins, setCoins] = useState<CoinSummary[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(function () {
    getTopCoins()
      .then(function (data) {
        setCoins(data)
      })
      .catch(function (err) {
        setError('Could not load coins')
      })
  }, [])

  if (error) {
    return <div className="page">{error}</div>
  }

  if (!coins) {
    return <div className="page">Loading...</div>
  }

  return (
    <div className="page">
      <h1>Top 10 Cryptocurrencies</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (ZAR)</th>
            <th>Market Cap</th>
            <th>24h Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(function (coin) {
            return (
              <tr key={coin.id} onClick={function () { navigate('/coin/' + coin.id) }} style={{ cursor: 'pointer' }}>
                <td>{coin.market_cap_rank}</td>
                <td><img src={coin.image} alt={coin.name} width="20" height="20" style={{ verticalAlign: 'middle', marginRight: 8 }} />{coin.name}</td>
                <td>{coin.symbol.toUpperCase()}</td>
                <td>{coin.current_price.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' })}</td>
                <td>{coin.market_cap.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 })}</td>
                <td>{coin.price_change_percentage_24h?.toFixed(2)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
