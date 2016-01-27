var _ = require("lodash");

var chainer = function(arr) {
    return _.chain(arr)
        .map(function(item) {
            return item + "chained";
        })
        .map(function(item) {
            return item.toUpperCase();
        })
        .sortBy()
        .value();
}

module.exports = chainer;
