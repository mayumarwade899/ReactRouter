import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <section>
        <h1>About Page</h1>
        <button onClick={() => navigateToContact()}>Go to contact</button>
      </section>
    </>
  );
};

export default About;
