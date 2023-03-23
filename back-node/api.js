import express from "express"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const api = ({ app }) => {
  let employee = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      emailId: "johndoe@gmail.com",
    },
    {
      id: 2,
      firstName: "Holly",
      lastName: "Pimily",
      emailId: "pholly@gmail.com",
    },
    {
      id: 3,
      firstName: "Saki",
      lastName: "Ton",
      emailId: "st123@gmail.com",
    },
  ];


  // GET all
  app.get("/employees", (req, res) => {
    res.json(employee);
  });


  // GET a single employee by ID
  app.get("/employees/:id", (req, res) => {
    const employeeId = parseInt(req.params.id);
    const employee = employees.find((employee) => employee.id === employeeId);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: `Employee with ID ${employeeId} not found.` });
    }
  });

  
  // POST  
  app.post("/employees", (req, res) => {
    const newEmployee = req.body;
    newEmployee.id = employees.length + 1; // Automatic ID incrementing by one at each post based on a number of employees
    employees.push(newEmployee);
    res.json(newEmployee);
  });


  // PUT
  app.put("/employees/:id", (req, res) => {
    const employeeId = parseInt(req.params.id);
    const updatedEmployee = req.body;
    const index = employees.findIndex((employee) => employee.id === employeeId);
    if (index !== -1) {
      employees[index] = { id: employeeId, ...updatedEmployee };
      res.json(employees[index]);
    } else {
      res.status(404).json({ message: `Employee with ID ${employeeId} not found.` });
    }
  }); 


  // DELETE
  app.delete("/employees/:id", (req, res) => {
    const employeeId = parseInt(req.params.id);
    const index = employees.findIndex((employee) => employee.id === employeeId);
    if (index !== -1) {
      employees.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: `Employee with ID ${employeeId} not found.` });
    }
  });



  
  // Server
  app.listen(8080, () => {
  console.log('Server is listening on port 8080.');
});
};

export default api