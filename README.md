
# DeFi Dashboard – A Decentralized Finance Solution

DeFi Dashboard is a decentralized cryptocurrency tracking and analytics tool that fetches real-time market prices and calculates unrealized profit/loss (PnL) using the CoinGecko API. Built with a focus on transparency and decentralization, this platform empowers users to track their crypto assets effortlessly.


## Features

✅ Fetches real-time cryptocurrency prices without centralized control.  
✅ Calculates unrealized PnL based on real-time market data.  
✅ Supports multiple cryptocurrencies (BTC, ETH, BNB, XRP).  
✅ Simple and user-friendly UI for seamless financial tracking.  
✅ Fully decentralized approach—leveraging public APIs for open data access.
## Tech Stack 
## Frontend
HTML, CSS, JavaScript – Traditional Web Technologies  
React.js / Next.js – For fast and scalable UI  
Ethers.js / Web3.js – To interact with decentralized blockchain networks  
Wagmi / RainbowKit – For seamless wallet integration (MetaMask, WalletConnect)

## Backend
Node.js & Express.js – For server-side logic  
CoinGecko API – Fetches decentralized market data  
IPFS / Arweave (Future Integration) – Decentralized file storage

## Blockchain Integration (Future Enhancements):
Solidity / Rust – For developing smart contracts  
Ethereum / Polygon / Solana – Potential networks for on-chain tracking  
The Graph Protocol – For indexing blockchain data
## Installation

## Clone the Repository

```bash
 git clone https://github.com/yourusername/defi-dashboard.git
 cd defi-dashboard
```
## Open in VS Code
```bash
code .
```
## Install Dependencies
```bash
npm install
```
## Run the Server
```bash
node server.js
```
## Open the App
Visit http://localhost:3000 in your browser.

## API Endpoint
The backend provides an endpoint to fetch real-time prices and calculate PnL.
## POST /api/pnl
Request Body:
```json
{
  "cost": 25000,
  "coinId": "bitcoin"
}
```
Response Example:
```json
{
  "pnl": 2000,
  "currentPrice": 27000
}

```
## Why Decentralized?

Unlike traditional financial tools, DeFi Dashboard doesn't rely on centralized exchanges or intermediaries. It fetches data directly from decentralized sources, ensuring transparency, security, and freedom from third-party control.

## Future Improvements
🚀 Add more cryptocurrencies & DeFi assets.     
📊 Implement historical price charts for deeper insights.   
🔐 Integrate blockchain-based authentication for enhanced security.  
🌐 Store user preferences on IPFS or Arweave for decentralization.


## Screenshots

![App Screenshot](https://github.com/hamzaruel/defi-dashboard/blob/06eeddc4da81c03684452662ea625b450995b04f/Screenshot%202025-02-17%20022512.png)
