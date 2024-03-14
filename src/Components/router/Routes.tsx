import { Route, Routes, useNavigate } from "react-router-dom";
import {useEffect} from "react";
import Home from "../../Pages/Home";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

const Router: React.FC = () => {
const navigate = useNavigate();
    useEffect(() => {
        navigate("/login")
    }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route   path="/login" element={<LoginForm />} />
      <Route path="/sign-up" element={<RegisterForm />} />
      <Route path="*" element={<center><h1>Not Found</h1></center>}/>
    </Routes>
  );
};

export default Router;
