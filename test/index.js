import { expect } from 'chai';
import { runAdd5 } from '../lib'
import  * as calcModule from '../index.js';
import sinon from 'sinon';

describe('calcModule', () => {
  before(() => {
    sinon.stub(calcModule, 'add5').callsFake((number) => {
      return number
    })
  })
  it('stubbed add5 causes function to not add anything', () => {
    const result = runAdd5()
      expect(result).to.eql(0)
  });
});
