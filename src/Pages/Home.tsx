import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <p>
        <Link to="/sign-up">Регистрация</Link>
      </p>
      <p>
        <Link to="/login">Вход</Link>
      </p>
    </div>
  );
};

export default Home;