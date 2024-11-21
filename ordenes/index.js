const express = require('express');
const amqp = require('amqplib');

const app = express();
const amp_conn = "amqp://localhost:5672"; // conexion a rabbitMQ Server

app.use(express.json());
let dataOrden = {};

// POST endpoint para actualizar datos de la orden
app.post('/nuevaOrden', (req, res) => {
    const { cliente_id, orden_id, numero } = req.body;

    if (cliente_id && orden_id && numero) {
        // Actualizar cache
        dataOrden = { cliente_id, orden_id, numero };
        res.status(200).json({ message: "Orden actualizada!", data: dataOrden });
    } else {
        res.status(400).json({ error: "Es nesesraio que todos los campos esten llenos." });
    }
});

// GET endpoint para enviar data de ordenes a la cola
app.get('/colarOrden', async (req, res) => {
    try {
        if (!dataOrden.cliente_id) {
            return res.status(400).json({ error: "Ordenes vacias, debe uilizar /nuevaOrden." });
        }

        const connection = await amqp.connect(amp_conn);
        const channel = await connection.createChannel();
        await channel.assertQueue("orden.creadas");
        channel.sendToQueue("orden.creadas", Buffer.from(JSON.stringify(dataOrden)));

        res.status(200).json({ message: "Orden enviada!", data: dataOrden });
    } catch (error) {
        console.error("Error sending data to queue:", error);
        res.status(500).json({ error: "Problema al enviar data a la cola." });
    }
});


app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
