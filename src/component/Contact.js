import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <section>
        <h1>Contact Page</h1>
        <button onClick={() => navigateToLogin()}>Go to Login</button>
      </section>
    </>
  );
};

export default Contact;
