const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: [4, 'First Name is too short!'],
    maxLength: 15
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: [4, 'Last Name is too short!'],
    maxLength: 20
  },
  emailId: {
    type: String,
    required :[true,'Enter valid Email ID !'],
    lowercase:true
  
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;