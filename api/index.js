const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`); // eslint-disable-line no-console
  });
});


// force: true: Esto eliminará todas las tablas definidas en tus modelos y las creará de nuevo. Esto es útil durante el desarrollo cuando estás cambiando tus modelos con frecuencia y quieres que la base de datos refleje estos cambios. Sin embargo, ten en cuenta que esto eliminará todos los datos existentes en las tablas.