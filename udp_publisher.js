const express = require('express');
const { set } = require('express/lib/application');
const app = express();
const port = 8383;

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

app.use(express.static('public'))
app.use(express.json())

app.post('/', (req, res) => {
    const { parcel } = req.body
    // console.log(parcel)
    if (!parcel) {
        return res.status(400).send({ status: 'failed' })
    }
    res.status(200).send({ status: 'received' })



    if (parcel == "s") {
        client.send('00', 0, 2, 12000, '127.0.0.1');
        console.log("stop")
    }
    if (parcel == "w") {
        client.send('11', 0, 2, 12000, '127.0.0.1');
        console.log("forward")
    }
    if (parcel == "d") {
        client.send('10', 0, 2, 12000, '127.0.0.1');
        console.log("right")
    }
    if (parcel == "a") {
        client.send('01', 0, 2, 12000, '127.0.0.1');
        console.log("left")
    }
    console.log(parcel)
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))