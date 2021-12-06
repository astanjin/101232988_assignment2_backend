const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Read ALL-Get Employees

app.get('/api/v1/employees', async (req, res) => {
  const employees = await employeeModel.find({});

  try {
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});
//Get Employee
app.get('/api/v1/employees/:id', async (req, res) => {
  const employee= await employeeModel.find({_id:{$eq:req.params.id}});

  try {
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});




//Post Employees
app.post('/api/v1/employees', async (req, res) => {
   const firstName =req.body.firstName
   const lastName =req.body.lastName
   const emailId =req.body.emailId
    const employee = new employeeModel({firstName :firstName ,lastName :lastName ,emailId :emailId});
  
    try {
      await employee.save();
      res.send(employee);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Update Employee
app.put('/api/v1/employees/:id', async (req, res) => {
  const firstName =req.body.firstName
   const lastName =req.body.lastName
   const emailId =req.body.emailId
  // const id =req.body.id
   
  
    try {
     await employeeModel.findByIdAndUpdate(req.params.id,     
     {firstName,lastName,emailId})
     const employee = await employeeModel.save()
      res.send(employee)
    } catch (err) {
      res.status(500).send(err)
    }
  })



//Delete Record

app.delete('/api/v1/employees/:id', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.params.id)
  
      if (!employee) res.status(204).send("No item found")
      res.status(200).send("Deleted Successfully!")
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app