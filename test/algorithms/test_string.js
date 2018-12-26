'use strict';

import assert from 'assert';
import { lcs } from '../../src/algorithms';

describe('test string algorithms', () => {

    it('should get longest common subseq', () => {
        const first  = 'raven';
        const second = 'havoc';

        assert.strictEqual('av', lcs(first, second));
    });

});
