import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import { About } from "./components/About";
import NoteState from "./Context/notes/NotesState";

import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        // hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover={false}

        // theme="light"
      ></ToastContainer>
      <BrowserRouter>
        <NoteState>
          <div className="container">
            <Routes>
              {/* <Route exact path={"/"} element={<Home />} /> */}
              {/* <ProtectedRoute exact path={"/home"} element={<Home />} /> */}
              {/* <Route path="/home" element={<ProtectedRoute element={Home} />} /> */}
              {/* <Route path="/" element={<ProtectedRoute element={Home} />} /> */}
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />

              {/* <Route exact path={"/about"} element={<About />} /> */}
              <Route exact path={"/login"} element={<Login />} />
              <Route exact path={"/signup"} element={<Signup />} />
            </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
