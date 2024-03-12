import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/sign-up" element={<RegisterForm />} />
      <Route path="*" element={<center><h1>Not Found</h1></center>}/>
    </Routes>
  );
};

export default Router;
