// this must be the only place in the app that talks to the CoinGecko API

import type { CoinSummary, CoinDetail } from '../types/coin'

const BASE_URL = 'https://api.coingecko.com/api/v3'

// fetches the top 10 coins ranked by market cap, prices in ZAR
export async function getTopCoins(): Promise<CoinSummary[]> {
  const url =
    BASE_URL +
    '/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1'

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch top coins from CoinGecko')
  }

  const data: CoinSummary[] = await response.json()
  return data
}

// fetches full details for a single coin by its CoinGecko id (e.g. "bitcoin")
export async function getCoinById(id: string): Promise<CoinDetail> {
  const url = BASE_URL +
              '/coins/' +
              id +
              '?localization=false&tickers=false&community_data=false&developer_data=false'

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch details for coin: ' + id)
  }

  const data: CoinDetail = await response.json()
  return data
}
