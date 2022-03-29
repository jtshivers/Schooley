const Sequelize = require("sequelize");
const db = require("../database");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://tinyurl.com/stockcampus",
    validate: {
      isUrl: true,
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue:
      "The lobsters have risen! We've been too occupied with battle to finish typing a description.",
  },
});

module.exports = Campus;
