import { v4 as uuid } from 'uuid';

export default class PaperWork {
  private readonly _id: string;
  private _name: string;
  private _description: string;
  private _documentsRequired: string;

  constructor(name: string, description: string, documentsRequired: string) {
    this._id = uuid();
    this._name = name;
    this._description = description;
    this._documentsRequired = documentsRequired;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get documentsRequired(): string {
    return this._documentsRequired;
  }

  makeGeneric() {
    return {
      id: this._id,
      name: this._name,
      description: this._description,
      documentsRequired: this._documentsRequired,
    };
  }
}
