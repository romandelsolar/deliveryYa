(function() {
    'use strict';

    angular
        .module('supedidos.common.filters')
        .filter('relativeDistance', relativeDistanceFilter);

    /**
     * @ngdoc filter
     * @name supedidos.common.filters.filter:relativeDistance
     * @restrict A
     *
     * @description
     * Get duration in minutes and returns the corresponding relative time with qty and unit
     *
     * @param {string}       type       Type of the duration
     *                                  Types: seconds, minutes, hours, days, weeks, months, years
     *                                  Default: milliseconds
     *
     */

    relativeDistanceFilter.$inject = [];

    function relativeDistanceFilter() {
        return function (value, type) {
            if (value >= 1000) {
                return Math.floor(value / 1000) + 'km';
            }
            return Math.floor(value) + 'm';
        };

    }
})();
