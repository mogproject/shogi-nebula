/// <reference path="../../typings/index.d.ts" />

//import { expect } from 'chai';



import Pos from '../../src/core/pos';

describe('Pos', () => {
    it('should be instantiated', () => {
        let pos = new Pos(1, 2);
        expect(pos.column).to.equal(1);
        expect(pos.row).to.equal(2);
    });

});