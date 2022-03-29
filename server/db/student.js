const Sequelize = require("sequelize");
const db = require("./database");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://tinyurl.com/stockangrystudent",
    validate: {
      isUrl: true,
      notEmpty: true,
    },
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },
});

module.exports = Student;
