import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const { currentUser, signinWithGoogle } = UserAuth();
  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(currentUser){
      navigate("/chat")
    }
  }, [currentUser])
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to <span className="text-primary">React Chat</span></h1>
          <p className="py-6">
            Un chat creado con React, TailwindCSS, DaisyUI y Firebase.
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            Iniciar Sesion
          </button>
        </div>
      </div>
    </div>
  );
};
