export default interface IBook {
  id: number;
  title: string;
}

export class Book implements IBook{
  public id: number;
  public title: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.title = name;
  }
}
