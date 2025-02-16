document.getElementById('pnlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const coinId = document.getElementById('coin').value;
    const cost = parseFloat(document.getElementById('cost').value);

    const response = await fetch('/api/pnl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cost, coinId }),
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('currentPrice').textContent = `$${data.currentPrice.toFixed(2)}`;
        document.getElementById('result').textContent = `$${data.pnl.toFixed(2)}`;
    } else {
        alert('Error: ' + data.error);
    }
});