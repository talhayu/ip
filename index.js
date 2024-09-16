const express = require('express');
const app = express();

app.set('trust proxy', true);

app.get('/', (req, res) => {
    const header = req.headers
    console.log(req.ip)
    res.send(`Client IP Address: ${req.ip}`);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
