import PaperWork from './paperwork.model';
import { v4 as uuid } from 'uuid';

export default class School {
  private readonly _id: string;
  private _name: string;
  private _logo: string = 'https://via.placeholder.com/100';
  private _description: string = 'Descripción no proporcionada';
  private _address: string = 'Dirección no proporcionada';
  private _paperWork: PaperWork[];

  constructor(
    name: string,
    description: string,
    address: string,
    paperWork: PaperWork[]
  ) {
    this._id = name.trim().toLowerCase().replace(/\s/g, '-');
    this._name = name;
    this._description = description;
    this._address = address;
    this._paperWork = paperWork;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get logo(): string {
    return this._logo;
  }

  get description(): string {
    return this._description;
  }

  get address(): string {
    return this._address;
  }

  get paperWork(): PaperWork[] {
    return this._paperWork;
  }

  makeGeneric() {
    return {
      id: this._id,
      name: this._name,
      logo: this._logo,
      description: this._description,
      address: this._address,
      paperWork: this._paperWork.map((process) => process.makeGeneric()),
    };
  }
}
