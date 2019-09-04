import { r3 } from './index';
import { expect } from 'chai';
import 'mocha';

describe('r3 functions', () => {

  it('should return 50', () => {
    const result = r3(100, 0, 100, 0, 50);
    expect(result).to.equal(50);
  });

});