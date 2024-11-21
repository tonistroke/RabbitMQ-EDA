const express = require("express");
const amqp = require('amqplib');
const amqp_conn = "amqp://localhost:5672";

const app = express();

async function queue_connect() {
  try {
    const connection = await amqp.connect(amqp_conn);
    const channel = await connection.createChannel();
    await channel.assertQueue("orden.creadas");
    channel.consume("orden.creadas", (message) => { // Consume los datos en cola
      console.log("Mensaje recibido!!")
      console.log({ message: message.content.toString() });
      channel.ack(message); // acknowledge metodo confirma la llegada del mensaje a la cola
    });
  } catch (error) {
    console.log({ error });
  }
}

queue_connect();

app.listen(8088, () => {
  console.log("Listening on PORT 8088");
});