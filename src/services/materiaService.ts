import materias from "../mocks/materias";
import { IMateria } from "../interfaces/IMateria";

export const getMaterias = (): IMateria[] => {
  return materias as IMateria[];
};

export const getMateriaById = (id: number): IMateria => {
  const materias = getMaterias();
  const materiaFind = materias.find((materia) => materia.id === id);
  return materiaFind as IMateria;
};
