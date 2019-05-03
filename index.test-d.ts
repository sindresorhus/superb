import {expectType} from 'tsd';
import superb = require('.');

expectType<readonly string[]>(superb.all);
expectType<string>(superb.random());
