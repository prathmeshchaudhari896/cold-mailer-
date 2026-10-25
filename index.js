import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import fileRoutes from './routes/file.routes.js';
import mailRoutes from './routes/mail.routes.js';
import dotenv from 'dotenv';

  
const app = express();
const PORT = 5000;
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/mails', mailRoutes);
app.use('/api/files', fileRoutes);


connectDB();

app.get('/', (req, res) => {
    res.send('Coldmailer API is Running');      
    });

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});