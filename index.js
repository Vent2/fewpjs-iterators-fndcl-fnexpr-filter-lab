// Code your solution here

function findMatching(drivers, inputName) {
    let sameName = drivers.filter(driver => {
        return driver === inputName || driver.includes(inputName.charAt(0).toLowerCase());
    })
    return sameName
}

function fuzzyMatch(drivers, inputName) {
    let sameLetters = drivers.filter(driver => {
        return driver.startsWith(inputName.charAt(0));
    })
    return sameLetters
}

function matchName(drivers, inputName) {
    let getName = drivers.filter(driver => {
        return driver.name === inputName;
    })
    return getName
}