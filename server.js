const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors')
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); 
app.use(cors())
mongoose.connect('mongodb+srv://Mina:minamina@comp3123.2pj6o.mongodb.net/db_assignment?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });


