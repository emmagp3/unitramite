import Procedure from './procedure.model';

export default interface School {
  id: string;
  name: string;
  logo: string;
  description?: string;
  address?: string;
  procedures: Procedure[];
}
