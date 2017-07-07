function secondLargest(array) {
    // var array = [20, 120, 111, 215, 54, 78];
    var max = Math.max.apply(null, array);
    array.splice(array.indexOf(max));
    return Math.max.apply(null, array);
}

module.exports = secondLargest;