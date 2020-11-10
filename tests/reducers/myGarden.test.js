import { should } from 'chai';
import myGarden from 'src/reducers/myGarden';

should();

describe ('Reducers test', () => {
    describe ('myGarden test', () => {
        it('should return an function', () => {
            myGarden.should.be.a('function');
        });
    });
});