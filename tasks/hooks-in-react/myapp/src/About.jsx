import { useParams } from "react-router-dom";

const About = () => {
  // Extract params from URL
  const { name, id } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>About Component</h1>
      <h2>Name: {name}</h2>
      <h2>ID: {id}</h2>
    </div>
  );
};

export default About;
