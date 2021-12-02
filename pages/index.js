import Students from "../components/students";

const data = [
  {
    id: 1,
    name: "Sanu Kumar",
    age: 22,
    email: "sanu@gmail.com",
  },
  {
    id: 2,
    name: "Ravi Verma",
    age: 27,
    email: "ravi@gmail.com",
  },
  {
    id: 3,
    name: "Shubham Kumar",
    age: 20,
    email: "shubham@gmail.com",
  },
];

export default function Home() {
  return (
    <div>
      <Students data={data} />
    </div>
  );
}
