import Tema from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
  email: Usuario | null;
}