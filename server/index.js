import express from 'express';
import cors from 'cors';


const app = express();

// Middleware to parse JSON bodies
app.use(express.json());



const corsOptions = {
  origin: 'http://localhost:3100', 
  methods: ['GET','PUT','PATCH','POST','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  // Adjust this to your frontend's URL
}

// Middleware to enable CORS
app.use(cors(corsOptions));




app.listen('3101', () => {
  console.log('Server is running on port 3101');
});

export default app;