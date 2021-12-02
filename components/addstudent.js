import React from "react";

const AddStudent = ({
  name,
  email,
  age,
  setName,
  setEmail,
  setAge,
  submitHandler,
}) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add Student</h2>
      <form
        onSubmit={(e) => submitHandler(e, name, age, email)}
        style={{
          //   border: "2px solid black",
          width: "40%",
          margin: "1rem auto",
          textAlign: "center",
          padding: "1rem",
          boxShadow: "8px 3px 17px -6px rgba(0,0,0,0.75)",
        }}
      >
        <div
          style={{
            // border: "2px solid red",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            marginBottom: ".7rem",
            padding: "0 2rem",
          }}
        >
          <label>Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div
          style={{
            // border: "2px solid red",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            marginBottom: ".7rem",
            padding: "0 2rem",
          }}
        >
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div
          style={{
            // border: "2px solid red",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            marginBottom: "1.3rem",
            padding: "0 2rem",
          }}
        >
          <label>Age</label>
          <input
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <button
          style={{ padding: ".2rem 2rem", fontSize: ".9rem" }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
