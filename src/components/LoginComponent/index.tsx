"use client";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "../../../node_modules/next/navigation";

const LoginComponent = () => {
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = () => {
    setUser({
      login: true,
      name: "Andreita",
      email: "andreita@email.com",
    });

    alert("Usuario Logueado..redirigiendo al Home");
    router.push("/");
  };

  return (
    <button className="button" onClick={handleLogin}>
      Logueando Usuario...
    </button>
  );
};

export default LoginComponent;
