import React, { useState } from "react";

// Functional Component
const Students = ({ data }) => {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  //   Function to remove specific student
  const removeStudent = (id) => {
    console.log(`Student removed with id ${id}`);
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
  };

  //   Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setStudents([...students, { id: students.length + 1, name, age, email }]);
    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <div style={{ margin: "2px" }}>
      <h2 style={{ textAlign: "center" }}>List of Students</h2>
      <table
        border="1"
        style={{ width: "80%", margin: "2rem auto", textAlign: "center" }}
      >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Button</th>
        </tr>
        {students.map((student) => {
          return (
            <tr key={student.id}>
              <td style={{ textAlign: "left", padding: ".3rem 1rem" }}>
                {student.name}
              </td>
              <td style={{ textAlign: "center" }}>{student.email}</td>
              <td style={{ textAlign: "center" }}>{student.age}</td>
              <td>
                <button onClick={() => removeStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <hr></hr>
      <h2 style={{ textAlign: "center" }}>Add Student</h2>
      <form
        onSubmit={submitHandler}
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

export default Students;
