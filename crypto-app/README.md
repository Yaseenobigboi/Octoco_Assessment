# Crypto App

A React + TypeScript app that displays live cryptocurrency prices using the CoinGecko API. All prices are shown in ZAR (South African Rand).

## Requirements

- Node.js v18 or higher
- npm

## Getting Started

### 1. Install dependencies

```bash
cd crypto-app
npm install
```

### 2. Run in development mode

```bash
npm run dev
```

The app will open at http://localhost:5173

## Pages

### Dashboard (`/`)
- Shows the top 10 cryptocurrencies ranked by market cap (highest to lowest)
- Each row displays: rank, name, symbol, current price (ZAR), market cap (ZAR), 24h price change
- Click any row to go to that coin's detail page

### Coin Detail (`/coin/:id`)
- Shows full details for the selected coin
- Displays: current price, market cap, 24h change, circulating supply, total supply, all-time high, all-time low
- Back button returns to the dashboard

## Project Structure

```
src/
  api/
    coingecko.ts      # all CoinGecko API calls
  pages/
    Dashboard.tsx     # top 10 coins list
    CoinDetail.tsx    # single coin detail view
  types/
    coin.ts           # TypeScript types for API data
  App.tsx             # router setup
  main.tsx            # app entry point
  index.css           # global styles
```
