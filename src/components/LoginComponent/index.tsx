"use client";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "../../../node_modules/next/navigation";
import styles from "./LoginComponent.module.css";

const LoginComponent = () => {
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `Para loguear al alumno: ${userData.email} contraseña:${userData.password}`
    );
    //router.push("/");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mb-2">
        <label className="text-xl font-bold">Email:</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className="mb-2">
        <label className="text-xl font-bold">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="button">Sign In</button>
      </div>
    </form>
  );
};

export default LoginComponent;
