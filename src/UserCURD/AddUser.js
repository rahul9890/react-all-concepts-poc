import axios from "axios";
import React, { useState } from "react";

export default function AddUser() {
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
  });

    
    
    
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        inputUser
      );
        setInputUser(response.data);        
        alert("Success")
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Failed to save user.");
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Add Users Information</h2>
        <label className="m-1">Full Name:</label>
        <input
          type="text"
          className="m-1"
          value={inputUser.name} // <-- Bind value to state
          onChange={(e) => {
            setInputUser((prev) => ({
              ...prev,
              name: e.target.value, // <-- Update only the "name" field
            }));
          }}
        />
        <br />
        <label className="m-1">Email:</label>
        <input
          type="email"
          className="m-1"
          value={inputUser.email}
          onChange={(e) => {
            setInputUser((prev) => ({
              ...prev,
              email: e.target.value, // <-- Update only the "name" field
            }));
          }}
        />
        <br />
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
