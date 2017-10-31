/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *   
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 * 
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 * 
 * 
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *  
 *   happy refactory :)
 */

function filterApplicants(applicants, filters) {
  var filterApplicants = [];
  var applicantsLength = applicants.length;
  var filterLength = filters.length;
  var hasOptions;
  var availableImmediately = false;
  var freshGrad = false;

  if (!filters.length) return applicants;


  if (filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1) {
    availableImmediately = true;
  } else if (filters.indexOf('FRESH_GRAD') !== -1) {
    freshGrad = true;
  }

  for (var i = applicantsLength; i--; ) {
    hasOptions = applicants[i].options && applicants[i].options.length > 0; //has.options

    if (applicants[i].options) {
      for (var k = filterLength; k--; ) {
        // loop through filters
        var hasFilter = false;
        for (var j = applicants[i].options.length; j--; ) {
          if (!availableImmediately && !freshGrad) {
            if (filters[k].indexOf(applicants[i].options[j]) !== -1) {
              hasFilter = true;
            }
          } else if (
            availableImmediately &&
            applicants[i].options[j] === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (freshGrad && applicants[i].options[j] === 'FRESH_GRAD') {
            hasFilter = true;
          }
        }
        hasOptions = hasOptions && hasFilter;
      }
    }
    if (hasOptions) {
      filterApplicants.unshift(applicants[i]);
    }
  }
  return filterApplicants;
}

module.exports = filterApplicants;
