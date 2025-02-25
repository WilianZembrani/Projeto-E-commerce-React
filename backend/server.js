import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cors());

//API ENDPOINTS

app.get('/', (req, res) => {
  res.send('API FUNCIONANDO');
});

app.listen(port, () => console.log('Server iniciado na PORTA: ' + port));
