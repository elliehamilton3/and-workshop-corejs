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

function isInListOfFilters(listOfFilters, filter) {
  return listOfFilters.indexOf(filter) !== -1
}

function filterApplicants(applicants, filters) {
  var filterApplicants = [];
  var applicantsLength = applicants.length;
  var filterLength = filters.length;
  var hasAttributes;
  var availableImmediately = false;
  var freshGrad = false;

  if (!filters.length) return applicants;


  if (isInListOfFilters(filters, 'AVAILABLE_IMMEDIATELY')) {
    availableImmediately = true;
  } 
  else if (isInListOfFilters(filters, 'FRESH_GRAD')) {
    freshGrad = true;
  }

  for (var i = applicantsLength; i--; ) {
    hasAttributes = applicants[i].attributes && applicants[i].attributes.length > 0;

    if (applicants[i].attributes) {
      for (var k = filterLength; k--; ) {
        var hasFilter = false;
        for (var j = applicants[i].attributes.length; j--; ) {
          if (!availableImmediately && !freshGrad) {
            if (filters[k].indexOf(applicants[i].attributes[j]) !== -1) {
              hasFilter = true;
            }
          } else if (
            availableImmediately &&
            applicants[i].attributes[j] === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (freshGrad && applicants[i].attributes[j] === 'FRESH_GRAD') {
            hasFilter = true;
          }
        }
        hasAttributes = hasAttributes && hasFilter;
      }
    }
    if (hasAttributes) {
      filterApplicants.unshift(applicants[i]);
    }
  }
  return filterApplicants;
}

module.exports = filterApplicants;
