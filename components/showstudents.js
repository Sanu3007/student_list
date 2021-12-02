import React from "react";

const ShowStudents = ({ students, removeStudent, newStudent }) => {
  return (
    <div>
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
        {students.map((student, index) => {
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
                <button onClick={() => newStudent(index)}>Add</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ShowStudents;
