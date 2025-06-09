"use client";
import Image from "next/image";
import { IMateria } from "@/interfaces/IMateria";
import { useState } from "react";

const Detail = ({ materia }: { materia: IMateria }) => {
  const [user, setUser] = useState(null);

  const handleInscripcion = () => {
    user
      ? alert("Ya podes Inscribirte")
      : alert("No podes Inscribirte, Logueate primero");
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
