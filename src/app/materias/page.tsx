import { IMateria } from "@/interfaces/IMateria";
import { getMaterias } from "@/services/materiaService";
import Card from "@/components/Card/index";

const Materia = () => {
  const materias = getMaterias();
  return (
    <main>
      <h1>Materias</h1>
      <hr />
      <br />
      <div className="wrapper flex items-center justify-between">
        {materias.map((materia: IMateria) => (
          <div key={materia.id}>
            <Card materia={materia} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Materia;
