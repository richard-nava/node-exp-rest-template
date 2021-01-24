import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import cons from 'consolidate';
import { fileURLToPath } from 'url';
import require from 'requirejs'

const path = require('path');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.use(express.static('/learnexp/views'));

// app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"))
});



app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))