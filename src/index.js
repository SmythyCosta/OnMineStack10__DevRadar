const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const settingsApp = require('./settings');

const app = express();
//const server = http.Server(app);


/**
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-jwyto.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
*/

mongoose.connect('mongodb://localhost/devradar')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...')
);

app.use(cors({ origin: settingsApp.ORIGIN_URL }))
app.use(express.json());
app.use(routes);

// server.listen(process.env.APP_PORT, () => {
//   console.log('Servidor funcionando na porta ' + process.env.APP_PORT)
// });

// server.listen(settingsApp.APP_PORT, () => {
//   console.log('Servidor funcionando na porta ' + settingsApp.APP_PORT)
// });

app.listen(settingsApp.APP_PORT, () => console.log(`Listening on port ${settingsApp.APP_PORT}...`));