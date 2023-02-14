import React from "react";
import AddNote from "./AddNote";
import { useContext, useEffect, useState } from "react";
import Notes from "./Notes";
import Navbar from "./Navbar";

const Home = () => {
  // const Notes = (props) => {
  const [userProfile, setuserProfile] = useState();
  const getUser = async () => {
    const host = "https://notescloud.onrender.com";

    // Get all Notes

    // API call

    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
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
    <>
      <Navbar />
      <AddNote />
      <Notes />
    </>
  );
};

export default Home;
