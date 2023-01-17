import React from "react";
import AddNote from "./AddNote";

import Notes from "./Notes";
import Navbar from "./Navbar";
const Home = () => {
  // console.log(localStorage.token);
  return (
    <>
      <Navbar />
      {/* <AddNote /> */}
      <Notes />
    </>
  );
};

export default Home;
