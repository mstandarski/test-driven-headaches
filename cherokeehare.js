function cherokeeHare(startingPopulation, birthRate, numberOfWeeks) {

  return startingPopulation*Math.pow((1 + birthRate),numberOfWeeks);

};

module.exports = cherokeeHare;

  // console.log(`There will be ${totalNumber} of Cherokee Hares after ${numberOfWeeks} weeks.`)

  // var startingPopulation = 200//keeps track of initial pop of hares
  // var birthRate = 0.1//what % are born each week
  // var numberOfWeeks = 4//how long we have been trying to simulate

  // var totalNumber = startingPopulation*Math.pow((1 + birthRate),numberOfWeeks)
