"use client";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "../../../node_modules/next/navigation";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = () => {
    alert("Cerrando sesion....");
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between">
      <ul className="flex space-x-4">
        <li className="link">
          <Link href="/">Home</Link>
        </li>
        <li className="link">
          <Link href="/materias">Materias</Link>
        </li>
        {user ? (
          <>
            <li className="link">
              <Link href="/inscripciones">Inscripciones</Link>
            </li>
            <li className="link">
              <Link href="/perfil">Perfil: {user.name}</Link>
            </li>
            <li className="link">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link href="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
