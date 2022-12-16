function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    function calculateOrbitalPeriod(avgAlt) {
        return Math.round(
            2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM),
        );
    }

    return arr.map(obj => ({
        name: obj.name,
        orbitalPeriod: calculateOrbitalPeriod(obj.avgAlt),
    }));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
