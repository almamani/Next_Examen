import { getMaterias } from "@/services/materiaService";
import { IMateria } from "@/interfaces/IMateria";
import Card from "@/components/Card/index";

const Home = () => {
  const materias: IMateria[] = getMaterias();
  return (
    <main>
      <h1>Lista de Materias</h1>
      <hr />
      <br />
      <div className="wrapper grid md:grid-cols-4">
        {materias.map((materia: IMateria) => (
          <div key={materia.id}>
            <Card materia={materia} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
