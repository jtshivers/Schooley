const router = require("express").Router();
const Campus = require("../db/models/campus");
const Student = require("../db/models/student");

router.get("/", async (req, res, next) => {
  try {
    let campuses = await Campus.findAll({
      include: [
        {
          model: Student,
        },
      ],
    });
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

router.post("/", async (req, res, next) => {
  try {
    let newCampus = req.body;
    if (newCampus.imageUrl === "") {
      delete newCampus.imageUrl;
    }
    if (newCampus.description === "") {
      delete newCampus.description;
    }
    res.status(201).send(await Campus.create(newCampus));
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    let newCampus = req.body;
    if (newCampus.imageUrl === "") {
      delete newCampus.imageUrl;
    }
    if (newCampus.description === "") {
      delete newCampus.description;
    }
    res.send(await campus.update(newCampus));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
