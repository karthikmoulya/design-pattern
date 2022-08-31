import House from '../house';
import HouseBuilder from '../house-builder';

export default class CastleDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('Castle')
      .setWallMaterialType('Sandstone')
      .setNumberDoors(100)
      .setNumberWindows(200)
      .getResult();
  }
}
