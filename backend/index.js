import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import  mongoose  from "mongoose";
import { Category } from "./models/inventoryCategories.js";
import categoryRouter from "./routes/categoryRoute.js";
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());



// middleware for handling cors policy(cors authentication something like that)
//option 1 : allow all origins with default of cors(*)
app.use(cors());
//option 2 : allow custom origins
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));


app.get('/', (request, response) => 
    {
        console.log(request)
        return response.status(234).send('Welcome to MERN Stack Inventory System');
    }
);

app.use('/categories', categoryRouter);






mongoose
    .connect(mongoDBURL)
    .then(() => 
        {
            console.log('App connected to database');
            app.listen(PORT, () => {
                console.log(`App is listening to port: ${PORT}`);
            
            });
        }
    )


    .catch((error) => 
        {

        }
    );