const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import axios
const { calculatePnl } = require('./utils/calculatePnl');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static('public'));

// API endpoint to calculate PnL
app.post('/api/pnl', async (req, res) => {
    const { cost, coinId } = req.body;

    try {
        // Fetch real-time price from CoinGecko
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
        );

        const currentPrice = response.data[coinId].usd;

        // Calculate PnL
        const pnl = calculatePnl(cost, currentPrice);

        res.json({ pnl, currentPrice });
    } catch (error) {
        console.error('Error fetching data from CoinGecko:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});