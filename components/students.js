import React, { useState } from "react";
import AddStudent from "./addstudent";
import ShowStudents from "./showstudents";

// Functional Component
const Students = ({ data }) => {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [addStudent, setAddStudent] = useState(false);
  const [index, setIndex] = useState(0);

  //   Function to remove specific student
  const removeStudent = (id) => {
    console.log(`Student removed with id ${id}`);
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
  };

  // Function to handle on add button click
  const newStudent = (index) => {
    // console.log("Add new student successfully");
    console.log(`New student inserted after index ${index}`);

    setIndex(index);
    setAddStudent(true);
  };

  //   Function to handle form submission
  const submitHandler = (e, name, age, email) => {
    e.preventDefault();
    console.log("Form Submitted");

    let beforeStudents = students.slice(0, index + 1);
    let afterStudents = students.slice(index + 1, students.length);
    beforeStudents = beforeStudents.map((student) => student);
    afterStudents = afterStudents.map((student) => student);
    console.log(beforeStudents);
    console.log(afterStudents);

    setStudents([
      ...beforeStudents,
      { id: new Date().getTime(), name, age, email },
      ...afterStudents,
    ]);
    setName("");
    setAge("");
    setEmail("");
    setAddStudent(false);
    setIndex(0);
  };

  return (
    <div style={{ margin: "2px" }}>
      {addStudent ? (
        <AddStudent
          name={name}
          age={age}
          email={email}
          setName={setName}
          setAge={setAge}
          setEmail={setEmail}
          submitHandler={submitHandler}
        />
      ) : (
        <ShowStudents
          students={students}
          removeStudent={removeStudent}
          newStudent={newStudent}
        />
      )}
    </div>
  );
};

export default Students;
