/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { Pos } from "../../src/core/pos";


describe('Pos', () => {
    it('should be instantiated', () => {
        let pos = new Pos(1, 2);
        expect(pos.column).toBe(1);
        expect(pos.row).toBe(2);

        expect(new Pos(3, 4)).toEqual(new Pos(3, 4));
    });
});
