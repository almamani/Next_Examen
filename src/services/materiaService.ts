import materias from "../mocks/materias";
import { IMateria } from "../interfaces/IMateria";

export const getMaterias = (): IMateria[] => {
  return materias as IMateria[];
};
