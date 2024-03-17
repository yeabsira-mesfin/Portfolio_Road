const _ = require('lodash');

const numbers = [33,46,76,32,3,2,1];

_.each(numbers, function(numbers, i){
    console.log(numbers);
})