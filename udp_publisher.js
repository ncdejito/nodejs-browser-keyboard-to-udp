const express = require('express');
const { set } = require('express/lib/application');
const app = express();
const port = 8383;

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

const valid_keys = new Map();
valid_keys.set('w', '11');
valid_keys.set('a', '01');
valid_keys.set('s', '00');
valid_keys.set('d', '10');

app.use(express.static('public'))
app.use(express.json())

app.post('/', (req, res) => {
    const { key } = req.body
    if (!key) {
        return res.status(400).send({ status: 'failed' })
    }
    res.status(200).send({ status: 'received' })

    console.log(key);
    if (valid_keys.has(key)) {
        client.send(valid_keys.get(key), 0, 2, 12000, '127.0.0.1');
    }

})

app.listen(port, () => console.log(`Server has started on port: ${port}`))