const express = require('express');
const app = express();

app.set('trust proxy', true);

app.get('/', (req, res) => {
    let clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // If the IP is in IPv6-mapped IPv4 format, convert it to standard IPv4
    if (clientIp.startsWith("::ffff:")) {
        clientIp = clientIp.split("::ffff:")[1];
    }

    console.log(clientIp);
    res.send(`Client IP Address: ${clientIp}`);
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
