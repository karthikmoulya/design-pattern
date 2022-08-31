import ChaiFactory from './chair-factory';

const CHAIR = ChaiFactory.getChair('BigChair');
console.log(CHAIR.getDimesions());
