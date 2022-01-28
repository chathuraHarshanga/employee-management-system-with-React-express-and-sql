import mysql from "mysql";

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employee_system",
});

export const createEmployee = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
};
