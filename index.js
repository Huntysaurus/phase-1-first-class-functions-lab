const returnFirstTwoDrivers = function([Sally, Bob, Freddy, Claudia]) {
    return [Sally, Bob]
}

const returnLastTwoDrivers = function([sally, Bob, Freddy, Claudia]) {
    return [Freddy, Claudia]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function(cost) {
        return cost * fare
    }
}

const fareDoubler = function(fare) {
    createFareMultiplier(fare)
        return fare * 2
    }

const fareTripler = function(fare) {
    createFareMultiplier(fare)
    return fare * 3
}

function selectDifferentDrivers(drivers = [Sally, Bob, Freddy, Claudia], selectingDriver) {
    return selectingDriver(drivers)
}