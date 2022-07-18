import  express  from 'express'
import cors from 'cors'
import usersRouter from './modules/routes/users.js';
import hobbiesRouter from './modules/routes/hobbies.js';
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(cors());
app.use( bodyParser.json() ); 
app.use((req, res, next) =>{
  console.log('HTTP ', req.method, ' ',req.originalUrl)
  next()
})

app.use('/api', usersRouter())
app.use('/api', hobbiesRouter())

//Serving the React app:
app.use(express.static(path.join(__dirname, 'client','build')) );
app.use('/', (req, res) => {res.sendFile(path.join(__dirname, 'client','build','index.html')); } );


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
