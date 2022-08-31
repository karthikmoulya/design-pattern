import FurnitureFactory from './furniture-factory';

let FURNITURE = FurnitureFactory.getFurniture('SmallChair');
console.table(FURNITURE?.getDimesions());
console.log(FURNITURE?.name);

FURNITURE = FurnitureFactory.getFurniture('BigTable');
console.table(FURNITURE?.getDimesions());
console.log(FURNITURE?.name);
