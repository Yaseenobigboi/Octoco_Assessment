# Crypto App

A React + TypeScript app that displays live cryptocurrency prices using the CoinGecko API.

## Requirements

- Node.js v18 or higher
- npm

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode

```bash
npm run dev
```

The app will open at http://localhost:5173

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Dashboard | `/` | Top 10 cryptocurrencies by market cap |
| Coin Detail | `/coin/:id` | Detailed info for a selected coin |

## Notes

- All prices are displayed in ZAR (South African Rand)
- Data is fetched live from the [CoinGecko API](https://www.coingecko.com/en/api)
