"use client";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useRouter } from "../../../node_modules/next/navigation";
import { IMateria } from "@/interfaces/IMateria";

const Detail = ({ materia }: { materia: IMateria }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const handleInscripcion = () => {
    if (user) {
      alert("Puede continuar el proceso de inscripcion");
    } else {
      alert("Antes de inscribirse deberá loguearse");
      router.push("/login");
    }
  };

  return (
    <main className="wrapper">
      <div className="flex justify-center intems-center">
        <Image src={materia.image} width={300} height={300} />
      </div>
      <div className="text-center">
        <p className="text-2xl mb-2">Dia: {materia.dia}</p>
        <p className="text-2xl mb-2">Hora: {materia.hora}</p>
        <p className="text-2xl mb-2">Profesor: {materia.profesor}</p>
        <p className="text-xl mb-2">{materia.descripcion}</p>
        <button className="button mb-4" onClick={handleInscripcion}>
          Inscribirse
        </button>
      </div>
    </main>
  );
};

export default Detail;
