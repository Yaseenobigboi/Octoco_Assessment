// this must show detailed information about a single cryptocurrency

import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCoinById } from '../api/coingecko'
import type { CoinDetail as CoinDetailType } from '../types/coin'

function CoinDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [coin, setCoin] = useState<CoinDetailType | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(function () {
    if (!id) return

    getCoinById(id)
      .then(function (data) {
        setCoin(data)
      })
      .catch(function () {
        setError('Could not load coin details')
      })
  }, [id])

  if (error) {
    return (
      <div className="page">
        <button className="back-button" onClick={function () { navigate('/') }}>Back</button>
        <p>{error}</p>
      </div>
    )
  }

  if (!coin) {
    return <div className="page">Loading...</div>
  }

  return (
    <div className="page">
      <button className="back-button" onClick={function () { navigate('/') }}>Back</button>

      <div className="coin-header">
        <img src={coin.image.large} alt={coin.name} width="64" height="64" />
        <div>
          <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
          <p>Rank #{coin.market_cap_rank}</p>
        </div>
      </div>

      <table className="detail-table">
        <tbody>
          <tr>
            <td>Current Price</td>
            <td>{coin.market_data.current_price.zar.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' })}</td>
          </tr>
          <tr>
            <td>Market Cap</td>
            <td>{coin.market_data.market_cap.zar.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 })}</td>
          </tr>
          <tr>
            <td>24h Change</td>
            <td>{coin.market_data.price_change_percentage_24h?.toFixed(2)}%</td>
          </tr>
          <tr>
            <td>Circulating Supply</td>
            <td>{coin.market_data.circulating_supply.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Total Supply</td>
            <td>{coin.market_data.total_supply !== null ? coin.market_data.total_supply.toLocaleString() : 'Unlimited'}</td>
          </tr>
          <tr>
            <td>All Time High (ZAR)</td>
            <td>{coin.market_data.ath.zar.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' })}</td>
          </tr>
          <tr>
            <td>All Time Low (ZAR)</td>
            <td>{coin.market_data.atl.zar.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' })}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CoinDetail
