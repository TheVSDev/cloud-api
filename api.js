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



  // Server
  app.listen(8080, () => {
  console.log('Server is listening on port 8080.');
});
};

export default api