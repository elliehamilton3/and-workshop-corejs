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
  let filteredApplicants = [];

  if (!filters.length) return applicants;

  if (isInListOfFilters(filters, 'AVAILABLE_IMMEDIATELY')) {
    filteredApplicants = applicants.filter(function(applicant) {
      return isInListOfFilters(applicant.attributes, 'AVAILABLE_IMMEDIATELY');
    });
  } 
  else if (isInListOfFilters(filters, 'FRESH_GRAD')) {
    filteredApplicants = applicants.filter(function(applicant) {
      return isInListOfFilters(applicant.attributes, 'FRESH_GRAD');
    });
  }
  else {
    filteredApplicants = applicants.filter(function(applicant){
      let list = filters.filter(function(filter){
        return isInListOfFilters(applicant.attributes, filter);
      });
      if (list.length !== filters.length) return false;
      return true;
    });
  }
  return filteredApplicants;
}

module.exports = filterApplicants;
