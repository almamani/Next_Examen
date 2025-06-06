import Image from "next/image";
import { IMateria } from "@/interfaces/IMateria";

const Card = ({ materia }: { materia: IMateria }) => {
  return (
    <div className="m-6 p-4 bg-white">
      <Image src={materia.image} width={280} height={280} />
      <h3>{materia.name}</h3>
      <p>{materia.dia}</p>
      <p>{materia.profesor}</p>
    </div>
  );
};

export default Card;
