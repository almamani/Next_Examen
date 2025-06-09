import { getMateriaById } from "@/services/materiaService";
import { notFound } from "next/navigation";
import Detail from "../../../components/Detail";

interface PageProps {
  params: {
    id: string;
  };
}
const Materia = ({ params }: PageProps) => {
  const { id } = params;
  const materiaFind = getMateriaById(parseInt(id));

  if (!materiaFind) {
    return notFound();
  }

  return (
    <main>
      <h1>{materiaFind.name}</h1>
      <hr />
      <br />
      <Detail materia={materiaFind} />
    </main>
  );
};

export default Materia;
