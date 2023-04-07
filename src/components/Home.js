import React from "react";
import AddNote from "./AddNote";
import { useContext, useEffect, useState } from "react";
import Notes from "./Notes";
import Navbar from "./Navbar";

const Home = () => {
  const [userProfile, setuserProfile] = useState();
  // Get all Notes
  const getUser = async () => {
    const host = "https://notescloud.onrender.com";

    // API call

    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
    const json = await response.json();
    console.log(json);
    setuserProfile(json);
    console.log(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <AddNote />
        <Notes />
      </div>
    </div>
  );
};

export default Home;
