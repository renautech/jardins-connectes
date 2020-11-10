/**
 * Import
 */
import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai';

// Components
import JardinConnectes from 'src/components/JardinConnectes';

// préparation de should
should();

describe('Série de tests : JardinConnectes', () => {
  const comp = shallow(<JardinConnectes />);
  it('should have prop className', () => {
    comp.props().should.have.property('className');
  });

  // un test suspendu avec skip
  it.skip('should not have prop id', () => {
    comp.props().should.not.have.property('id');
  });
});
