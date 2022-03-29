const router = require("express").Router();
const Campus = require("../db/models/campus");
const Student = require("../db/models/student");

router.get("/", async (req, res, next) => {
  try {
    let campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let campus = await Campus.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Student,
        },
      ],
    });
    if (campus === null) {
      res.status(404).send("404 Not Found"); ////////////////EDIT LATER TO UNIVERSAL 404 PAGE WITH ERROR//////
    } else {
      res.json(campus);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
