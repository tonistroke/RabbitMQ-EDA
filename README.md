# RabbitMQ event-drivent arquitecture

##### Commandos para inizializar el proyecto:

bash inisializar APIs:
```bash
npm install
npm run start
```

inicializar `COLA` RabbitMQ Server:
```bash
docker compose up
```

Comunicacion con `PRODUCTOR`:
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


##### Diferencias entre Arquitecturas del proyecto:
**La arquitectura de microservicios** se centra en la estructura organizativa de una aplicación, descomponiéndola en servicios más pequeños e independientes. Se trata de cómo descomponemos nuestra aplicación.  

**La arquitectura basada en eventos** se centra en el patrón de comunicación entre servicios.