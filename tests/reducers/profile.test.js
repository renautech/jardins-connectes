import { should } from 'chai';
// import profile : export default
// import { initialState } : named export
import profile, { initialState } from 'src/reducers/profile';

should();

describe('Reducers test', () => {
    describe('profile test', ()=>{
        it('should return the initialState', () => {
            profile().should.be.equal(initialState);
        })
    });
});