require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const teamRoutes = require('./routes/teamRoutes');
const newsRoutes = require('./routes/newsRoutes');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');
const cookieParser = require('cookie-parser');
const b  = require ('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors({ 
  origin: 'http://localhost:5173', 
  credentials: true 
}));

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



// Routes
app.use('/api/events', eventRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/auth', authRoutes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
