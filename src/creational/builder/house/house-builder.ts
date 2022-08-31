import House from './house';

interface IHouseBuilder {
  house: House;
  setBuildingType(buildingType: string): this;
  setWallMaterialType(wallMaterialType: string): this;
  setNumberDoors(number: number): this;
  setNumberWindows(number: number): this;
  getResult(): House;
}

export default class HouseBuilder implements IHouseBuilder {
  house: House;

  constructor() {
    this.house = new House();
  }

  setBuildingType(buildingType: string): this {
    this.house.buildingType = buildingType;
    return this;
  }

  setWallMaterialType(wallMaterialType: string): this {
    this.house.wallMaterialType = wallMaterialType;
    return this;
  }

  setNumberDoors(number: number): this {
    this.house.doors = number;
    return this;
  }

  setNumberWindows(number: number): this {
    this.house.windows = number;
    return this;
  }

  getResult(): House {
    return this.house;
  }
}
