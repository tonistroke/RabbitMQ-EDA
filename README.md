# RabbitMQ event-drivent arquitecture
RabbitMQ es un **bróker** de mensajes diseñado para la comunicación asíncrona y la puesta en cola de mensajes.

##### **Funciones de un bróker o intermediario:**
1. **Enrutamiento de mensajes:** El intermediario determina el destino de cada mensaje entrante en función de reglas y configuraciones predefinidas.   
2. **Almacenamiento de mensajes:** Almacena los mensajes en colas hasta que son consumidos por un receptor, lo que garantiza una entrega fiable aunque el receptor no esté disponible temporalmente.
3. **Entrega de mensajes>:** El broker entrega los mensajes a los consumidores correspondientes, ya sea inmediatamente o en un momento posterior, en función del modo de entrega especificado.
4. **Acuse de recibo `conn.ack()`:** Gestiona los acuses de recibo de los consumidores, garantizando que los mensajes se procesan correctamente y no se pierden.

##### **Casos de uso**:
- Facilitar la comunicación entre microservicios.
- Comunicación asíncrona entre componentes del sistema.
- Procesamiento de datos en tiempo real.
- Implementación de sistemas orientados a eventos.


**Protocolos utilizados en RabbitMQ**
- **Advanced Message Queuing Protocol (AMQP):** Es un protocolo estándar abierto que ofrece una forma flexible y fiable de intercambiar mensajes entre aplicaciones. Admite varios patrones de mensajería, como punto a punto, publicación-suscripción y solicitud-respuesta. 
- **Message Queuing Telemetry Transport (MQTT):** Es un protocolo ligero diseñado para dispositivos con poco ancho de banda y recursos limitados. Se utiliza habitualmente en aplicaciones IoT para transmitir datos de sensores y mensajes de control.

##### Commandos para inizializar el proyecto:

bash Inicializar APIs:
```bash
npm install
npm run start
```

Inicializar `COLA` RabbitMQ Server:
```bash
docker compose up
```

Insertar datos en cola con API `PRODUCTOR`:

Cambiar orden
```bash
 curl -X POST http://localhost:8080/nuevaOrden -H "Content-Type: application/json" -d '{
	 "cliente_id": 15,
	 "orden_id": 2500,
	 "numero": "9876543210"
 }'
```
Colar orden
```bash
curl http://localhost:8080/colarOrden
```

Consumir datos en cola con la API `CONSUMIDOR`:
```bash
npm install
npm run start
```

##### Diferencias entre Arquitecturas del proyecto:
**La arquitectura de microservicios** se centra en la estructura organizativa de una aplicación, descomponiéndola en servicios más pequeños e independientes.

**La arquitectura basada en eventos** se centra en el patrón de comunicación entre servicios.