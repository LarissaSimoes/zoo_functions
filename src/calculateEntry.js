const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (!entrants) return 0;
  const children = entrants.filter((persons) => persons.age < 18).length;

  const adults = entrants.filter((persons) => persons.age >= 18 && persons.age < 50).length;

  const seniors = entrants.filter((persons) => persons.age >= 50).length;

  return { child: children, adult: adults, senior: seniors };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === undefined) return 0;
  const childSum = countEntrants(entrants).child * 20.99;
  const adultSum = countEntrants(entrants).adult * 49.99;
  const seniorSum = countEntrants(entrants).senior * 24.99;
  return childSum + adultSum + seniorSum;
};

module.exports = { calculateEntry, countEntrants };
