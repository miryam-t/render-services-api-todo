const express = require('express');
const axios = require('axios');
const app = express();

// כאן את מדביקה את המפתח שייצרת ב-Render בתוך הגרשיים
const RENDER_API_KEY = 'rnd_GdeTHURdSDyvY0YSRQT5yvnbtW5x';

app.get('/services', async (req, res) => {
try {
const response = await axios.get('https://api.render.com/v1/services?limit=20', {
headers: {
'Authorization': `Bearer ${RENDER_API_KEY}`,
'Accept': 'application/json'
}
});
res.json(response.data);
}
 catch (err) {
console.error(err);
res.status(500).json({ error: "Failed to fetch services from Render" });
}
});

const PORT = 3000;
app.listen(PORT, () => {
console.log('Server is running! Check: http://localhost:3000/services');
});