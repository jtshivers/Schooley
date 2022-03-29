const db = require("./database");
const Student = require("./models/student");
const Campus = require("./models/campus");

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  db,
  Student,
  Campus,
};
