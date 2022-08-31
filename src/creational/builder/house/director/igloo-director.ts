import House from '../house';
import HouseBuilder from '../house-builder';

export default class IglooDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Igloo')
      .setWallMaterialType('Ice')
      .setNumberDoors(1)
      .getResult();
  }
}
