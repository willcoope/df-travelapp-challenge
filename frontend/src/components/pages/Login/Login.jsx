import HomeBackground from "../Homepage/HomeBackground";
import Footer from "../../Footer";
import Header from "../../Header";
import SearchBar from "../Homepage/SearchBar";
import LoginForm from "./LoginForm";
import Background from "../../Background";

const Login = () => {
  return (
    <div>
      <Header />
      <Background />
      <h1>Login</h1>
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
