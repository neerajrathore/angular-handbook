export class Test {
  private id: number;
  private firstName: string;
  private lastName: string;
  private salary: number;
  private address: string;

  constructor(id: number, firstName: string, lastName: string, salary: number,address:string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.address = address;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getYearlySalary(): number {
    return 12 * this.salary;
  }
  getId(): number {
    return this.id;
  }
  getAddress():string{
      return this.address;
  }
}
