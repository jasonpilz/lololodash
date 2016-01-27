var _ = require("lodash");


var tempSorter = function(cities) {

    var results = { hot:  [],
                    warm: [] };

    function checkTemp(city) {
        return city > 19;
    }

    _.forEach(cities, function(city, cityName) {
        if (_.every(city, checkTemp)) {
            results.hot.push(cityName);
        } else if (_.some(city, checkTemp)) {
            results.warm.push(cityName);
        }
    });
    return results;
};

module.exports = tempSorter;

