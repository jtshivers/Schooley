import React from "react";

export default function Homepage() {
  return (
    <div className="welcome">
      <h1>Welcome to Schooley!</h1>
      <h3>
        This app was built with PostgreSQL, Express, React, Redux and Node.js.
        Head on up to the Navbar and select Campuses or Students to do some
        basic data sorting and CRUD operations.
      </h3>
      <h3>
        To keep things clean and prevent vandalism, the database will be
        reseeded daily.
      </h3>
    </div>
  );
}
