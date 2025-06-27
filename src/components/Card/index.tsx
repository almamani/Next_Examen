import Link from "next/link";
import Image from "next/image";
import { IMateria } from "@/interfaces/IMateria";

const Card = ({ materia }: { materia: IMateria }) => {
  return (
    <Link href={`materias/${materia.id}`}>
      <div className="m-6 p-4 bg-white">
        <Image src={materia.image} width={280} height={280} />
        <div className="text-center">
          <h3 className="text-3xl">{materia.name}</h3>
          <p className="text-xl">
            {materia.dia} - {materia.hora}
          </p>
          <p className="text-xl">{materia.profesor}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
