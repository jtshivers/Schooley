const router = require("express").Router();
const Student = require("../db/models/student");
const Campus = require("../db/models/campus");

router.get("/", async (req, res, next) => {
  try {
    let students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let student = await Student.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Campus,
        },
      ],
    });
    if (student === null) {
      res.status(404).send("404 Not Found"); ////////////////EDIT LATER TO UNIVERSAL 404 PAGE WITH ERROR//////
    } else {
      res.json(student);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
