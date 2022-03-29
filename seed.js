const { green, red } = require("chalk");
const { db, Campus, Student } = require("./server/db");

const students = [
  {
    firstName: "Jinkle",
    lastName: "Binkle",
    email: "poopscoop@gmail.com",
    gpa: 3.0,
    imageUrl:
      "https://media.vanityfair.com/photos/59833725f3c6f80e768c8081/16:9/w_1280,c_limit/hot-rod-cult-rebirth-01.jpg",
  },
  {
    firstName: "Randy",
    lastName: "BoBandy",
    email: "scooppoop@gmail.com",
    gpa: 1.3,
  },
  {
    firstName: "GORP",
    lastName: "ThatsRight,GORP",
    email: "pooppoop@gmail.com",
    gpa: 4.0,
  },
];

const campuses = [
  {
    name: "Lahey Reformatory",
    address: "4567 Main St, Somewhere In Canada",
    description: "We make burgers!",
  },
  {
    name: "Green Bastard College",
    address: "1234 Secondary St, Parts Unknown",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

    await Promise.all(campuses.map((campus) => Campus.create(campus)));
    await Promise.all(students.map((student) => Student.create(student)));

    db.close();
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
