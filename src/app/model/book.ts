export default interface IBook {
  id: number;
  name: string;
}

export class Book implements IBook{
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
