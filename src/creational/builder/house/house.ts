export default class House {
  doors: number = 0;
  windows: number = 0;
  buildingType: string = '';
  wallMaterialType: string = '';

  construction(): string {
    return `This is ${this.wallMaterialType} ${this.buildingType} with ${this.doors} door (s) and ${this.windows} window (s)`;
  }
}
