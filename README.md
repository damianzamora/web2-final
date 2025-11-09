🏆 League API – CRUD con Node.js, Express y MongoDB

Proyecto que implementa una API RESTful para gestionar ligas deportivas, permitiendo crear, leer, actualizar y eliminar registros desde una base de datos MongoDB.

Se le agrega la feature para manejar CRUD de usuarios, permitiendo definir distintos roles (admin o client), el cual permitirá tener distintos tipos de accesos a los métodos.

Para que esto ocurra se agrega dos middleware, uno para autenticar los usuarios mediante un token y otro para verificar que el usuario sea de tipo ADMIN cuando se necesite.

⚙️ Tecnologías utilizadas

🔹Node.js

🔹Express

🔹Mongoose (MongoDB)

🔹Postman (para pruebas de endpoints)

🚀 Funciones principales (CRUD)
Método	Endpoint	Descripción

🔹GET	-> /api/leagues	- Obtiene todas las ligas almacenadas

🔹GET	->/api/league/:id	- Obtiene una liga específica por su ID

🔹POST ->	/api/league	- Crea una nueva liga

🔹PUT	-> /api/league/:id	- Actualiza una liga existente

🔹DELETE ->	/api/league/:id	- Elimina una liga por ID

🧩 Estructura del modelo League
{
🔹 name: String,          // Nombre de la liga (obligatorio, 3–40 caracteres)
  
🔹sport: String,         // Tipo de deporte (obligatorio, [football, basketball, nfl])
  
🔹 country: String,       // País de la liga (obligatorio)
  
🔹openingDate: Date,     // Fecha de inicio (opcional)
  
🔹participantNumber: Number, // Número de participantes (obligatorio)
  
🔹 createdAt: Date,       // Fecha de creación (automática)
  
🔹  updatedAt: Date        // Fecha de última actualización (automática)
}


🧠 Controladores

Los controladores implementan la lógica principal del CRUD:

🔹 getLeagues
Obtiene todas las ligas de la base de datos.

🔹 getLeagueById
Devuelve una liga específica según el ID recibido como parámetro.

🔹 createLeague
Crea una nueva liga validando los datos de entrada.
Incluye manejo de errores de validación de Mongoose.

🔹 updateLeague
Actualiza una liga existente. Si el ID no existe, devuelve un error 404.

🔹 deleteLeague
Elimina una liga según su ID. Si no se encuentra, devuelve un error 404.


🧪 Instalación, configuración y uso de sistema.

a) git clone https://github.com/damianzamora/web2-tp2.git

b) Crear archivo .env en la ruta principal con las siguientes variables y valores.

SERVER_PORT = 3000

MONGO_URL = Se envía URL via mail

SECRET = Alf@b3t@!$

c) Instalar dependencias

npm install ( crea package.json y package-lock.json)

npm install bcrypt dotenv express jsonwebtoken mongoose

d) Abrir terminal y ejecutar node index.js, esto levantará el sistema en puerto 3000.

e) Ejecutar colecciones de postman ubicadas en 'postman_collection.json' , en postman se puede importar.




