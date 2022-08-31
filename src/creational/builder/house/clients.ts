import IglooDirector from './director/igloo-director';
import CastleDirector from './director/castle-director';
import HouseboatDirector from './director/houseboat-director';

const IGLOO = IglooDirector.construct();
const CASTLE = CastleDirector.construct();
const HOUSEBOAT = HouseboatDirector.construct();

console.log(IGLOO.construction());
console.log(CASTLE.construction());
console.log(HOUSEBOAT.construction());
