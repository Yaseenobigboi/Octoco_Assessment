// this must describe the shape of data we receive from the CoinGecko API

// used on the Dashboard - one entry in the top 10 list
export type CoinSummary = {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  price_change_percentage_24h: number
}

// used on the CoinDetail page - full data for one coin
export type CoinDetail = {
  id: string
  name: string
  symbol: string
  image: {
    large: string
  }
  market_cap_rank: number
  description: {
    en: string
  }
  market_data: {
    current_price: {
      zar: number
    }
    market_cap: {
      zar: number
    }
    total_supply: number | null
    circulating_supply: number
    price_change_percentage_24h: number
    ath: {
      zar: number
    }
    atl: {
      zar: number
    }
  }
}
