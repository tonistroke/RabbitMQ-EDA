const express = require("express");
const app = express();

const amqp = require('amqplib');
const amp_conn = "amqp://localhost:5672";

const dataOrden = {
    cliente_id: 12,
    orden_id: 2300,
    numero: "1234324234"
}


// Endpoint nueva data

app.get('/', async (req, res) => {
    try {
        const coneccion = await amqp.connect(amp_conn);
        const channel = await coneccion.createChannel();
        await channel.assertQueue("orden.creadas", buffer.from(JSON.Stringify(dataOrden)));

    }
    catch (error) {
        console.log(error)
    }
})

app.listen(8080, () => {
    console.log("API orden escuchando en 8080")
})
