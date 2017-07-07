function tallestMountain(mountainsArray) {

    // var mountainsArray = [29029, 20310, 19341, 28251]
    //no array needs to be defined in this file, only the test file
    return Math.max.apply(Math, mountainsArray)
};

module.exports = tallestMountain;