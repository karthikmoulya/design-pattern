import House from '../house';
import HouseBuilder from '../house-builder';

export default class HouseboatDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('House Boat')
      .setWallMaterialType('Wood')
      .setNumberDoors(4)
      .setNumberWindows(6)
      .getResult();
  }
}
